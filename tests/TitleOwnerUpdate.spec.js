const { test, expect } = require('@playwright/test');

test.describe('Title Owner Update from Title Page', () => {

    test('change the owner of a title', async({page})=>{
        await page.goto('/titles/2');
        await page.waitForLoadState('domcontentloaded');
        expect(await page.locator(':nth-match(input, 2)').getAttribute('placeholder')).toEqual('Enter the new owner name');
        await page.locator(':nth-match(input, 2)').fill("New Owner");
       // await page.locator(':nth-match(:text("Save"), 1)').click();
       await page.locator('text=Save').click();

    });
});