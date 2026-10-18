// @ts-check
import { defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  //retries:1,
  timeout:40*1000,//test timeout
  expect:
  {timeout:40 *1000},
  reporter: [['html', { outputFolder: 'playwright-report' }]],
  projects:[{
    name:'webkit_test',
use: {
actionTimeout:10*1000,
navigationTimeout:20*1000,
browserName:'webkit',
headless:false,
screenshot:'on',
trace:'on',
...devices['iPhone 11']
  }},{
    name:'chrome_test',
  use: {
actionTimeout:10*1000,
navigationTimeout:20*1000,
browserName:'chromium',
video:'on',
headless:false,
screenshot:'on',
trace:'on',
//viewport:{width:720,height:720}
//comment
//comment
//comment
  }
}
  ]
  

  });

