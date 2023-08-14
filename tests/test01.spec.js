// const { test, expect } = require("@playwright/test");
import {test, expect} from '@playwright/test'

test.describe('Home Page', ()=>{

    test.info().annotations.push({
        type: 'task',
        description: 'Testing home page',
    });

    test('test01_test_url', async (page)=>{
        // Open the home page to see url works.
        await page.goto('https://demoqa.com/login');
        // Check page url.
        const pageURL = await page.url();
        console.log('Page url is : ', pageURL);
        await expect(page).toHaveURL('https://demoqa.com/login');
        await page.close()

    });

    test('test_02_verify_title', async (page)=>{

        page.goto('https://demoqa.com/login');
        // Verify page title is DEMOQA.
        const pagetitle = await page.title();
        console.log('Page Title is : ', pagetitle);
        await expect(page).toHaveTitle('DEMOQA');
        await page.close()
    });

    test('', async (page)=>{
        // Check text Login appears on the page.    
        const element = await page.getByText('Login');
        await expect(element !== undefined ).toBeTruthy();
        await page.close()
    });
});

