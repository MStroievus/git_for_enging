import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('&&: товарів більше 3 і менше 5', async ({ page }) => {
  await page.setContent('<li>1</li><li>2</li><li>3</li><li>4</li>');

  const count = await page.locator('li').count();

  if (count > 3 && count < 5) {
    console.log(`Товарів ${count}`);
  }
});

test('кнопка "Купити" або "Buy"', async ({ page }) => {
  await page.setContent('<button>Buy</button>');

  const text = await page.locator('button').textContent();

  if (text === 'Купити' || text === 'Buy') {
    console.log(`Кнопка: ${text}`);
  }
});

test('запит відправлено, якщо статус 200 або 201', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/posts');

  const status = response.status();

  expect(status === 150 || status === 160, 'Статус повинен бути 200 або 201').toBe(true);
});

test('сесію створено з правильними даними', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      instructions: 'bla bla bla',
      isForRecurring: false,
      repeatTill: 1790177400,
      startTime: 1789659000,
    },
  });

  const session = await response.json();

  expect(session.instructions === 'bla bla bla' && session.startTime === 1789659000, 'Сесія повинна мати інструкції і час початку').toBe(true);
});
