import { test, expect } from '@playwright/test'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

test.describe("POST API Tests", () => {
    // TC009 - Create new post - verify 201 status
    test("create new post with valid data and verify 201", async ({ request }) => {
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


    // TC010 - Create post with valid data - verify response body
    // TC011 - Create post without title - verify 400 / validation
    // TC012 - Create post with special characters - verify handling
    // TC013 - Verify created post has ID
    // TC014 - Verify Location header in response
})