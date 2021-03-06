const { test, expect } = require('@playwright/test');

test.describe('Title Search From Landing page', () => {

    test('search for a valid title', async({page})=>{
        await page.goto('/');
        expect(await page.locator('input').getAttribute('placeholder')).toEqual('Enter a title number');
        await page.locator('input').fill("1");
        await page.locator('button').click();

        // await Promise.all([
        //     console.log("Still loading")
        // ]);
        // await page.waitForURL('**/titles/1');
        await page.waitForLoadState('domcontentloaded');
        expect(await page.locator('table.table tr:nth-child(1) td')).toContainText('Lot 1 on Block 1');
        //.toHaveText('Lot 1 on Block 1');
        expect(await page.locator('table.table tr:nth-child(2) td')).toContainText('Jane Doe');
        //await page.screenshot({path:'screenshots/titles-page.png'});

    })
})