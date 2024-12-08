import { test, expect } from "@playwright/test";

test.describe("Typing Practice Website", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:5173");
    });

    test("should switch between light and dark mode", async ({ page }) => {
        const themeToggle = page.locator(".theme-toggle");

        // 切換到暗色模式
        await themeToggle.click();
        await expect(page.locator("body")).toHaveClass(/dark/);

        // 切換回亮色模式
        await themeToggle.click();
        await expect(page.locator("body")).not.toHaveClass(/dark/);
    });

    test("should type and receive immediate feedback", async ({ page }) => {
        const inputArea = page.locator(".input-area");
        const keyboard = page.locator(".keyboard .key");
        const textDisplay = page.locator(".text-display");

        await inputArea.fill("");

        // 按下 'T' 鍵
        await keyboard.filter({ hasText: "T" }).click();
        await expect(textDisplay.locator("text=T")).toHaveCSS(
            "color",
            "rgb(0, 0, 0)"
        );

        // 按下 'e' 鍵
        await keyboard.filter({ hasText: "e" }).click();
        await expect(textDisplay.locator("text=Te")).toHaveCSS(
            "color",
            "rgb(0, 128, 0)"
        );
    });

    test("should add custom text", async ({ page }) => {
        const inputArea = page.locator(".input-area");
        const customTextButton = page.locator(".custom-text-btn");
        const modalTextarea = page.locator(".modal textarea");
        const modalSubmitButton = page.locator('.modal button[type="submit"]');

        await inputArea.fill("");

        // 點擊添加自定義文本按鈕
        await customTextButton.click();
        await modalTextarea.fill("This is a custom text for typing practice.");

        // 確保模态框已顯示
        await expect(modalTextarea).toBeVisible();

        // 提交自定義文本
        await modalSubmitButton.click();

        // 等待新的文本顯示
        await page.waitForSelector(
            "text=This is a custom text for typing practice."
        );
    });
});
