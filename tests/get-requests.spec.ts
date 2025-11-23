import { test, expect } from '@playwright/test'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

test.describe("GET API Tests", () => {
    test("should get all posts and verify status 200", async ({ request }) => {
        const response = await request.get(`${BASE_URL}/posts`)
        const posts = await response.json()

        expect(response.status()).toBe(200)
        expect(posts.length).toBeGreaterThan(0)
    })

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

    // Get invalid post ID - verify 404
    test("get invalid post ID and verify 404", async ({ request }) => {
        const response = await request.get(`${BASE_URL}/posts/abc`)
        expect(response.status()).toBe(404)
    })
})