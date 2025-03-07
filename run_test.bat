@echo off
setlocal enabledelayedexpansion

REM Navigate to the test directory
cd /d C:\Users\User\Desktop\Automation\MainRequestTest

REM Run Playwright tests
npx playwright test


REM Send report to Telegram
node send-report.js