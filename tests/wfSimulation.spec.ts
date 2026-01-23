// Water Flow Simulation
// Decision Table Testing is a Black Box test design technique (behavioral or
// behavior-based technique), used where different combinations of test input
// conditions result in different outcomes. Prepare decision table matrix to find bug.

import { test, expect } from '@playwright/test';

test('All pipes are open', async ({ page }) => {
  
  //variables used in the testing
    const waterFlowSimulationWindow = 'https://www.testingmarathon.com/testing/WaterFlowSimulation/';
    const Valve1 = page.locator('[id="valve1"]');
    // const Valve2 = page.locator('[id="valve2"]');
    // const Valve3 = page.locator('[id="valve3"]');
    // const Valve4 = page.locator('[id="valve4"]');
    // const Valve5 = page.locator('[id="valve5"]');

    const Pipe1 = page.locator('[id="pipe1"]');
    // const Pipe2 = page.locator('[id="pipe2"]');
    // const Pipe3 = page.locator('[id="pipe3"]');
    // const Pipe4 = page.locator('[id="pipe4"]');
    // const Pipe5 = page.locator('[id="pipe5"]');

    const Indicator1 = page.locator('[id="indicator1"]');
    const Indicator2 = page.locator('[id="indicator2"]');
    const Indicator3 = page.locator('[id="indicator3"]');
    const Indicator4 = page.locator('[id="indicator4"]');
    const Indicator5 = page.locator('[id="indicator5"]');
  
  await page.goto(waterFlowSimulationWindow);
  await expect(page).toHaveTitle(/Water Flow Simulation/);
  // await expect(Valve1).toHaveText('Valve 1');
  // await expect(Valve2).toHaveText('Valve 2');
  // await expect(Valve3).toHaveText('Valve 3');
  // await expect(Valve4).toHaveText('Valve 4');
  // await expect(Valve5).toHaveText('Valve 5');

  // await expect(Pipe1).toHaveText('pipe 1');
  // await expect(Pipe2).toHaveText('pipe 2');
  // await expect(Pipe3).toHaveText('pipe 3');
  // await expect(Pipe4).toHaveText('pipe 4');
  // await expect(Pipe5).toHaveText('pipe 5');

 
//   await expect(Indicator1).toBeVisible(); 
//   await expect(Indicator1).toBeEnabled();
//   await Indicator1.hover();
//    const box = await Indicator1.boundingBox();
// if (!box) {
//   throw new Error("Indicator1 is not visible or not in the DOM");
// }

// await page.mouse.click(
//   box.x + box.width / 5,
//   box.y + box.height / 5
// );

  await page.waitForTimeout(1000);
  await expect(Pipe1).toHaveCSS('background-color','rgb(128, 128, 128)');
  await Valve1.waitFor({ state: 'visible' });
  await page.waitForLoadState('networkidle');
  await Valve1.click({ delay: 1000 });
  // await Indicator2.click({button:"left"});
  // await Indicator3.click({button:"left"});
  // await Indicator4.click({button:"left"});
  // await Indicator5.click({button:"left"});
// 
  await expect(Pipe1).toHaveCSS('background-color','rgb(33, 150, 243)');
  // await expect(Indicator1).toHaveCSS('background-color','rgb(76, 175, 80)');
  // await expect(Indicator2).toHaveCSS('background-color','rgb(255, 0, 0)');
  // await expect(Indicator3).toHaveCSS('background-color','rgb(255, 0, 0)');
  // await expect(Indicator4).toHaveCSS('background-color','rgb(255, 0, 0)');
  // await expect(Indicator5).toHaveCSS('background-color','rgb(255, 0, 0)');

});