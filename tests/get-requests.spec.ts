import { test, expect } from '@playwright/test'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

test.describe("GET API Tests", () => {

    // TC001
    test("should get all posts and verify status 200", async ({ request }) => {
        const response = await request.get(`${BASE_URL}/posts`)
        const posts = await response.json()

        expect(response.status()).toBe(200)
        expect(posts.length).toBeGreaterThan(0)
    })

    // TC002
    test("should get a single post by ID and verify structure", async ({ request }) => {
        const response = await request.get(`${BASE_URL}/posts/1`)
        expect(response.status()).toBe(200)

        const post = await response.json()

        expect(post).toHaveProperty('id')
        expect(post).toHaveProperty('title')
        expect(post).toHaveProperty('body')
        expect(post).toHaveProperty('userId')

        expect(post.id).toBe(1)
    })

    // TC003 - Get invalid post ID - verify 404
    test("get invalid post ID and verify 404", async ({ request }) => {
        const response = await request.get(`${BASE_URL}/posts/abc`)
        expect(response.status()).toBe(404)
    })

    // TC004 - Get all users - verify array length
    test("get all users and verify array length", async ({ request }) => {
        const response = await request.get(`${BASE_URL}/users`)
        const users = await response.json()

        expect(users.length).toBeGreaterThan(0)
        expect(users.length).toBe(10)
    })

    // TC005 - Get user by ID - verify user data fields
    test("get user by ID and verify user data feilds", async ({ request }) => {
        const response = await request.get(`${BASE_URL}/users/1`)
        const user = await response.json()

        expect(user.id).toBe(1)
        expect(user).toHaveProperty("name")
        expect(user).toHaveProperty("username")
        expect(user).toHaveProperty("email")
        expect(user).toHaveProperty("address")
        expect(user).toHaveProperty("phone")
        expect(user).toHaveProperty("website")
        expect(user).toHaveProperty("company")

    })

    // TC006 - Get posts by userId - verify filtering works
    test("get posts by userid and verify filtering works", async ({ request }) => {
        let userId = 1
        const response = await request.get(`${BASE_URL}/posts?userId=${userId}`)

        const posts = await response.json()

        for (let i = 0; i <= posts.length - 1; i++) {
            expect(posts[i].userId).toBe(userId)
        }
    })

    // Verify response headers (Content-Type)
    test("verify response headers", async ({ request }) => {
        const response = await request.get(`${BASE_URL}/posts`)
        const headers = response.headers()
        expect(headers['content-type']).toContain('application/json')
    })

    // Verify response time < 2000ms
    test("verify response time", async ({ request }) => {
        const startTime = Date.now()
        const response = await request.get(`${BASE_URL}/posts`)
        const endTime = Date.now()

        const responseTime = endTime - startTime

        expect(responseTime).toBeLessThan(2000)

    })

})