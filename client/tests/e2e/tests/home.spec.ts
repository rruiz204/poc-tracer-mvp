import { expect, test } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test("should display the homepage", async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigate();

  const title = page.getByTestId("home-title");
  await expect(title).toHaveText("Home Page");
});