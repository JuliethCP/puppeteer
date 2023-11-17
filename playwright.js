import { chromium } from 'playwright';
import os from 'os';
import fs from 'fs/promises';
import path from 'path';

let counter = 1;

async function processFiles() {
  const downloadPath = path.join(os.homedir(), 'Downloads');
  const files = await fs.readdir(downloadPath);

  for (const file of files) {
    if (file.startsWith('captura1') && file.endsWith('.mp4')) {
      await processVideo(path.join(downloadPath, file));
    }
  }
}

async function processVideo(videoPath) {
  const browser = await chromium.launch({
    slowMo: 30,
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await navigateWebPage(context, page, videoPath, counter);

  // Incrementa el contador para el próximo archivo
  counter++;

  // Cierra el navegador al finalizar el procesamiento del video
  await browser.close();
}

async function navigateWebPage(context, page, videoPath, counter) {
  // Listen for the dialog event
  page.on('dialog', async (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept();
  });

  await page.goto('https://app.morphcast.com/emotion-ai-video-frames-analyzer/#/');
  await page.click('button[id="openLicencePanel"]');
  const inputSelector = 'input[id="editlicenceKey"]';
  const textoAEscribir = '3afd07bfe6e9b3aed20a3ea33a4656b6cc83a134bedc';
  await page.fill(inputSelector, textoAEscribir);
  await page.$eval('//*[@id="collapseLicence"]/div/div[3]/button[1]', button => button.click());

  //unselect the filters we don't need
  await page.click('button[id="openFiltersPanel"]');
  await page.click('input[id="flexCheckaffects38"]');
  await page.click('input[id="flexCheckaffects98"]');
  await page.click('input[id="flexCheckarousal"]');
  await page.click('input[id="flexCheckquadrant"]');
  await page.click('input[id="flexCheckmin"]');
  await page.click('input[id="flexCheckmax"]');
  await page.click('input[id="flexChecklast"]');
  await page.click('input[id="flexCheckavg"]');
  await page.click('input[id="flexChecksamples"]');
  

  const buttonSelector = '.btn.btn-secondary.col-3.orangeButtonSecondary.mx-2.controlBtn';
  await page.waitForSelector(buttonSelector);
  await page.click(buttonSelector);

  const openFileButtonSelector = '.btn.btn-primary.orangeButton[data-bs-dismiss="modal"]';
  await page.waitForSelector(openFileButtonSelector);
  await page.click(openFileButtonSelector);

  // Make the file input visible
  const fileInput = await page.$('input#openFile');
  await fileInput.setInputFiles(videoPath); // Update this path accordingly

  // Click the button to start the analysis
  await page.click('button[id="startAnalysis"]');

  await page.waitForTimeout(60000);

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    clickButtonByText(page, ' Download Dashboard PDF Report '),
  ]);

  const nuevoNombre = `informe${counter}.pdf`;
  await download.saveAs(path.join(os.homedir(), 'Downloads', nuevoNombre));
}

// Function to click a button by text content
async function clickButtonByText(page, buttonText) {
  const buttonSelector = `button:has-text("${buttonText}")`;
  await page.waitForSelector(buttonSelector);
  await page.click(buttonSelector);

  // Return the download promise
  return page.waitForEvent('download');
}

processFiles();
