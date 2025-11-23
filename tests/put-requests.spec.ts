import { test, expect } from '@playwright/test'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

test.describe("PUT API Tests", () => {

    // TC013 - Update existing post - verify 200
    test.only('update existing post', async ({ request }) => {
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

    // Update with partial data - verify merge
    // Update non - existent post - verify 404
    // Update with invalid data - verify validation
    // Verify updated fields in response

})