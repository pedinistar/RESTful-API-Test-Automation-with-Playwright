import { test, expect } from '@playwright/test'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

test.describe("POST API Tests", () => {
    // TC009 - Create new post - verify 201 status
    test("create new post with valid data and verify 201 and response body", async ({ request }) => {
        const newPost = {
            userId: 1,
            title: 'The new post',
            body: 'this is the test body',
        }

        const response = await request.post(`${BASE_URL}/posts`, {
            data: newPost
        })

        expect(response.status()).toBe(201)

        const responseBody = await response.json()
        expect(responseBody.userId).toBe(newPost.userId)
        expect(responseBody.title).toBe(newPost.title)
        expect(responseBody.body).toBe(newPost.body)

        expect(responseBody.id).toBeDefined()
    })

    // TC010 - Create post without title - verify 400 / validation
    test("create post without title", async ({ request }) => {
        const invalidPost = {
            userId: 1,
            body: "this is body without a title"
        }

        const response = await request.post(`${BASE_URL}/posts`, {
            data: invalidPost
        })

        expect(response.status()).toBe(201)
    })

    // TC011 - Create post with special characters - verify handling
    test("create post with special characters", async ({ request }) => {
        const newSpecialCharPost = {
            userId: 1,
            title: "Hello 😊 🚀 @#%&*!",
            body: "Unicode test — 你好世界! <> {} [] ()"
        }

        const response = await request.post(`${BASE_URL}/posts`, {
            data: newSpecialCharPost
        })

        expect(response.status()).toBe(201)

        const responseBody = await response.json()

        expect(responseBody.userId).toBe(newSpecialCharPost.userId)
        expect(responseBody.title).toBe(newSpecialCharPost.title)
        expect(responseBody.body).toBe(newSpecialCharPost.body)

        expect(responseBody.id).toBeDefined()

    })

    // TC012 - Verify Location header in response
    test("verify location header in response", async ({ request }) => {
        const response = await request.post(`${BASE_URL}/posts`, {
            data: { title: "test", body: "test body", userId: 1 }
        })

        const locationHeader = response.headers()["location"]
        expect(locationHeader).toContain("/posts/")
    })
})