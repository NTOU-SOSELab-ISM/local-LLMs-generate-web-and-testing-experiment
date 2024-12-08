import { test, expect } from '@playwright/test';

test.describe('打字練習網站測試', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
  });

  // 測試主畫面元素
  test('應該顯示所有必要的頁面元素', async ({ page }) => {
    // 檢查主要元素是否存在
    await expect(page.locator('.theme-toggle')).toBeVisible();
    await expect(page.locator('.timer')).toBeVisible();
    await expect(page.locator('.input-area')).toBeVisible();
    await expect(page.locator('.text-display')).toBeVisible();
    await expect(page.locator('.keyboard')).toBeVisible();
    await expect(page.locator('.custom-text-btn')).toBeVisible();
  });

  // 測試主題切換
  test('應該能夠切換深色/淺色主題', async ({ page }) => {
    const typingPage = page.locator('.typing-page');
    
    // 檢查預設為淺色主題
    await expect(typingPage).toHaveClass(/light/);
    
    // 切換到深色主題
    await page.click('.theme-toggle');
    await expect(typingPage).toHaveClass(/dark/);
    
    // 再次切換回淺色主題
    await page.click('.theme-toggle');
    await expect(typingPage).toHaveClass(/light/);
  });

  // 測試打字功能和即時反饋
  test('應該正確顯示打字反饋', async ({ page }) => {
    const inputArea = page.locator('.input-area');
    
    // 輸入正確的文字
    await inputArea.type('The');
    
    // 檢查前三個字元是否標記為正確
    const chars = page.locator('.char').first().nth(0);
    await expect(chars).toHaveClass(/correct/);
    
    // 輸入錯誤的文字
    await inputArea.fill('Thi');
    
    // 檢查第三個字元是否標記為錯誤
    const incorrectChar = page.locator('.char').nth(2);
    await expect(incorrectChar).toHaveClass(/incorrect/);
  });

  // 測試自定義文本功能
  test('應該能夠添加自定義文本', async ({ page }) => {
    const customText = 'This is a custom text for testing.';
    
    // 點擊添加文本按鈕
    await page.click('.custom-text-btn');
    
    // 等待模態框出現
    await expect(page.locator('.modal')).toBeVisible();
    
    // 輸入自定義文本
    await page.locator('.modal textarea').fill(customText);
    
    // 提交文本
    await page.click('.modal button[type="submit"]');
    
    // 檢查文本是否更新
    await expect(page.locator('.text-display')).toContainText(customText);
  });

  // 測試計時器功能
  test('應該在開始打字時啟動計時器', async ({ page }) => {
    const timer = page.locator('.timer .time');
    
    // 檢查初始時間
    await expect(timer).toContainText('Time: 0s');
    
    // 開始打字
    await page.locator('.input-area').pressSequentially('T');
    
    // 等待一秒
    await page.waitForTimeout(1000);
    
    // 檢查計時器是否開始計時
    await expect(timer).toContainText('Time: 1s');
  });

  // 測試完成打字後的 WPM 計算
  test('應該在完成打字後顯示 WPM', async ({ page }) => {
    // 獲取預設文本
    const defaultText = "The quick brown fox jumps over the lazy dog. Programming is both an art and a science. Practice makes perfect.";
    const inputArea = page.locator('.input-area');
    
    // 輸入完整的預設文本
    await inputArea.type(defaultText);
    
    // 等待一下確保 WPM 計算完成
    await page.waitForTimeout(1000);
    
    // 檢查 WPM 是否顯示
    await expect(page.locator('.wpm')).toBeVisible();
    await expect(page.locator('.wpm')).toContainText('WPM:');
    
    // 可選：確保 WPM 值為有效數字
    const wpmText = await page.locator('.wpm').textContent();
    const wpmValue = parseInt(wpmText?.replace('WPM: ', '') || '0');
    expect(wpmValue).toBeGreaterThan(0);
  });
});