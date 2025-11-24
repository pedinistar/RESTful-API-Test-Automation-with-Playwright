import { test, expect } from '@playwright/test'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

test.describe("DELETE API Requests", () => {

    // TC016 - Delete existing post - verify 200
    test("TC016 - Delete existing post", async ({ request }) => {
        const response = await request.delete(`${BASE_URL}/posts/1`)
        expect(response.status()).toBe(200)
    })

    // TC017 - Delete non-existent post - verify 404
    test.fail("TC017 - Delete non-existent post", async ({ request }) => {
        const response = await request.delete(`${BASE_URL}/posts/200`)
        expect(response.status()).toBe(404)
    })

    // TC018 - Verify response body after deletion
    test.fail("TC018 - Verify response body after deletion", async ({ request }) => {
        const response = await request.delete(`${BASE_URL}/posts/1`)
        const postBody = await response.json()
        expect(postBody.title).toBeDefined()
        expect(postBody.body).toBeDefined()
        expect(postBody.userId).toBeDefined()
        expect(postBody.id).toBeDefined()
    })

})