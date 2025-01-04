import { expect, test } from "@playwright/test";
import { TestingPage } from "../pages/TestingPage";

test("should display the testing page", async ({ page }) => {
  const testingPage = new TestingPage(page);

  await testingPage.navigate();

  const title = page.getByTestId("testing-title");
  await expect(title).toHaveText("Testing Page");
});