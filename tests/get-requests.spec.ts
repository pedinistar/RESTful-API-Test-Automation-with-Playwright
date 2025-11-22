import { test, expect } from '@playwright/test'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

test.describe("GET API Tests", () => {
    test("should get all posts and verify status 200", async ({ request }) => {
        const response = await request.get(`${BASE_URL}/posts`)
        const posts = await response.json()

        expect(response.status()).toBe(200)
        expect(posts.length).toBeGreaterThan(0)
    })
})