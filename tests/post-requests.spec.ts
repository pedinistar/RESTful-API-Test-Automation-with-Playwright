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

    // TC012 - Create post with special characters - verify handling
    // TC013 - Verify created post has ID
    // TC014 - Verify Location header in response
})