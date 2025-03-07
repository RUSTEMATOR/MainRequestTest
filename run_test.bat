@echo off
chcp 65001 >nul  :: Set UTF-8 encoding
setlocal enabledelayedexpansion

REM Telegram bot credentials
set TELEGRAM_BOT_TOKEN=7895141268:AAF4GVj34m5-l2jf9nL-AqNwOBiSS6W69N4
set TELEGRAM_CHAT_ID=7895141268

REM Run Playwright tests
npx playwright test
if %errorlevel% neq 0 (
    echo Test failed, sending Telegram alert...
    powershell -Command "& {Invoke-RestMethod -Uri 'https://api.telegram.org/bot%TELEGRAM_BOT_TOKEN%/sendMessage' -Method Post -Body @{chat_id='%TELEGRAM_CHAT_ID%'; text='Playwright Tests Failed!'}}"
)