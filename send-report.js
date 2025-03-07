import { exec } from 'child_process';
import { request } from '@playwright/test';

const TELEGRAM_BOT_TOKEN = '7895141268:AAF4GVj34m5-l2jf9nL-AqNwOBiSS6W69N4';
const TELEGRAM_CHAT_ID = '-4788873656';
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

async function sendReport() {
  console.log('Running Playwright tests...');
  
  exec('npx playwright test', async (error, stdout, stderr) => {
    const reportText = stdout || stderr || 'No test output available.';

    console.log('Sending test results to Telegram...');
    
    const context = await request.newContext();
    await context.post(TELEGRAM_API_URL, {
      data: {
        chat_id: TELEGRAM_CHAT_ID,
        text: `Test Results:\n\`\`\`${reportText}\`\`\``,
        parse_mode: 'Markdown',
      },
    });

    console.log('Report sent to Telegram!');
  });
}

sendReport();
