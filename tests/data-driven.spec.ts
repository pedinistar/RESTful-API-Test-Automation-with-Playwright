import { test, expect } from '@playwright/test'

const BASE_URL = 'https://jsonplaceholder.typicode.com'


test.describe("Data driven API tests", () => {

    const userIds = [1, 2, 3, 4, 5]
    for (const userId of userIds) {

        test(`should get posts for user ${userId}`, async ({ request }) => {
            const response = await request.get(`${BASE_URL}/posts?userId=${userId}`)

            expect(response.status()).toBe(200)

            const posts = await response.json()

            posts.forEach((post: { userId: number }) => {
                expect(post.userId).toBe(userId)
            });
        })

    }

    const invalidIds = [-1, 0, 'abc', 99999];
    for (const invalidId of invalidIds) {
        test(`should handle invalid userId ${invalidId}`, async ({ request }) => {
            const response = await request.get(`${BASE_URL}/posts?userId=${invalidId}`)

            expect(response.status()).toBe(200);

            const posts = await response.json();
            expect(Array.isArray(posts)).toBeTruthy();
            expect(posts.length).toBe(0);

        })

    }
})