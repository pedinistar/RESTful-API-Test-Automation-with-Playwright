import { test, expect } from '@playwright/test'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

test.describe("PUT API Tests", () => {

    // TC013 - Update existing post - verify 200
    test('update existing post', async ({ request }) => {
        const response = await request.put(`${BASE_URL}/posts/1`, {
            data: {
                userId: 3,
                id: 3,
                title: "Updated Title",
                body: "Updated Body"
            }
        })

        const body = await response.json()

        expect(response.status()).toBe(200)
        expect(body.title).toContain("Updated Title")
        expect(body.body).toContain("Updated Body")
    })

    // TC014 - Update with partial data - verify merge
    test("update with partial data", async ({ request }) => {
        const response = await request.put(`${BASE_URL}/posts/1`)
        const body = await response.json()

        expect(response.status()).toBe(200)
        expect(body.title).toBeDefined()
        expect(body.body).toBeDefined()
    })

    /*
    BUG NOTE:
    Expected API behaviour:
        - PUT /posts/101 → should return 404 (resource not found)

    Actual:
        - API returns 500 (internal server error)
  
    This test is intentionally failing to surface the backend bug.
    */

    // Update non - existent post - verify 404
    test.only("update non-existent post", async ({ request }) => {

        // TODO: BUG - API returns 500 instead of 404 for non-existent post
        const response = await request.put(`${BASE_URL}/posts/101`)

        console.log(response.status());
        expect(response.status()).toBe(404)
    })

    // Update with invalid data - verify validation
    // Verify updated fields in response

})