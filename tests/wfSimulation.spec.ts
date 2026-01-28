import { test, expect } from '@playwright/test';

test('All pipes are open. Simple loop method', async ({ page }) => {
  
  //Valves - clickable buttons.
    const waterFlowSimulationWindow = 'https://www.testingmarathon.com/testing/WaterFlowSimulation/';

    const valves = [
      page.locator('#valve1'), 
      page.locator('#valve2'), 
      page.locator('#valve3'), 
      page.locator('#valve4'), 
      page.locator('#valve5')
    ];

    const pipes = [
      page.locator('#pipe1'), 
      page.locator('#pipe2'),
      page.locator('#pipe3'),
      page.locator('#pipe4'),
      page.locator('#pipe5')
    ];

    const indicators = [
      page.locator('#indicator1'),
      page.locator('#indicator2'),
      page.locator('#indicator3'),
      page.locator('#indicator4'),
      page.locator('#indicator5')
    ];

    // confirmation, that Valves and Pipes are present on the page
  await page.goto(waterFlowSimulationWindow);
  await expect(page).toHaveTitle(/Water Flow Simulation/);

  for (let i = 0; i < valves.length; i++) {

    await expect(valves[i]).toHaveText(`Valve ${i + 1}`);
    await expect(pipes[i]).toHaveText(`pipe ${i + 1}`);
  }
// //confirmation that the pipes and indicators are in closed state
  await page.waitForTimeout(1000);

  for (const p of pipes) {
    await expect(p).toHaveCSS('background-color', 'rgb(128, 128, 128)');
  }

  for (const ind of indicators) {
    await expect(ind).toHaveCSS('background-color', 'rgb(255, 0, 0)');
  }

   for (const v of valves) {
    await v.click({ delay: 1000 });
  }

  // Confirm open state
  for (const p of pipes) {
    await expect(p).toHaveCSS('background-color', 'rgb(33, 150, 243)');
  }
  for (const ind of indicators) {
    await expect(ind).toHaveCSS('background-color', 'rgb(76, 175, 80)');
  }

});

test('All pipes are open. Practical method', async ({ page }) => {
  
    const waterFlowSimulationWindow = 'https://www.testingmarathon.com/testing/WaterFlowSimulation/';

  await page.goto(waterFlowSimulationWindow);
  await expect(page).toHaveTitle(/Water Flow Simulation/);

  const config = [
  { Valve: '#valve1', pipe: '#pipe1', indicator: '#indicator1' },
  { Valve: '#valve2', pipe: '#pipe2', indicator: '#indicator2' },
  { Valve: '#valve3', pipe: '#pipe3', indicator: '#indicator3' },
  { Valve: '#valve4', pipe: '#pipe4', indicator: '#indicator4' },
  { Valve: '#valve5', pipe: '#pipe5', indicator: '#indicator5' },
];

for (const idx of config.keys()) {
  const v = page.locator(config[idx].Valve);
  const p = page.locator(config[idx].pipe);
  const ind = page.locator(config[idx].indicator);

  await expect(p).toHaveCSS('background-color', 'rgb(128, 128, 128)');
  await expect(ind).toHaveCSS('background-color', 'rgb(255, 0, 0)');

  await v.click({ delay: 1000 });

  await expect(p).toHaveCSS('background-color', 'rgb(33, 150, 243)');
  await expect(ind).toHaveCSS('background-color', 'rgb(76, 175, 80)');
}

});