import { test, expect } from '@playwright/test'
import { testData } from '../utils/test-data'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

test.describe("POST API Tests", () => {

    // TC009 - Create new post - verify 201 status
    test("create new post with valid data and verify 201 and response body", async ({ request }) => {

        const response = await request.post(`${BASE_URL}/posts`, {
            data: testData.validPost
        })

        expect(response.status()).toBe(201)

        const responseBody = await response.json()
        expect(responseBody.userId).toBe(testData.validPost.userId)
        expect(responseBody.title).toBe(testData.validPost.title)
        expect(responseBody.body).toBe(testData.validPost.body)

        expect(responseBody.id).toBeDefined()
    })

    // TC010 - Create post without title - verify 400 / validation
    test.fail("create post without title", async ({ request }) => {

        const response = await request.post(`${BASE_URL}/posts`, {
            data: testData.invalidPost
        })

        expect(response.status()).toBe(400) // But gives 201
    })

    // TC011 - Create post with special characters - verify handling
    test("create post with special characters", async ({ request }) => {

        const response = await request.post(`${BASE_URL}/posts`, {
            data: testData.specialCharPost
        })

        expect(response.status()).toBe(201)

        const responseBody = await response.json()

        expect(responseBody.userId).toBe(testData.specialCharPost.userId)
        expect(responseBody.title).toBe(testData.specialCharPost.title)
        expect(responseBody.body).toBe(testData.specialCharPost.body)

        expect(responseBody.id).toBeDefined()

    })
})