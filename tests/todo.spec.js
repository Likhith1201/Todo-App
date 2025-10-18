// tests/todo.spec.js
const { test, expect } = require('@playwright/test');
const { TodoPage } = require('../pages/todoPage');

test.describe('Todo List App', () => {
  let todoPage;

  test.beforeEach(async ({ page }) => {
    todoPage = new TodoPage(page);
    await todoPage.goto();
  });

  test('Add a task', async ({ page }) => {
    await todoPage.addTask('New Task 1');
    expect(await todoPage.taskExists('New Task 1')).toBeTruthy();
    await page.screenshot({ path: 'screenshots/add_task.png' });
  });

  test('Add multiple tasks', async ({ page }) => {
    const tasks = ['Task 1', 'Task 2', 'Task 3'];
    for (const task of tasks) {
      await todoPage.addTask(task);
    }
    expect(await todoPage.taskExists('Task 1')).toBeTruthy();
    expect(await todoPage.taskExists('Task 2')).toBeTruthy();
    expect(await todoPage.taskExists('Task 3')).toBeTruthy();
    await page.screenshot({ path: 'screenshots/add_multiple_tasks.png' });
  });

  test('Delete a task', async ({ page }) => {
    await todoPage.addTask('Task to Delete');
    await todoPage.deleteTask('Task to Delete');
    expect(await todoPage.taskExists('Task to Delete')).toBeFalsy();
    await page.screenshot({ path: 'screenshots/delete_task.png' });
  });

  test('Mark a task as done', async ({ page }) => {
    await todoPage.addTask('Complete Task');
    await todoPage.markTaskDone('Complete Task');
    expect(await todoPage.taskIsCompleted('Complete Task')).toBeTruthy();
    await page.screenshot({ path: 'screenshots/mark_done.png' });
  });

  test('Empty task cannot be added', async ({ page }) => {
    page.on('dialog', dialog => dialog.accept());
    await todoPage.addTask('');
    expect(await todoPage.taskExists('')).toBeFalsy();
    await page.screenshot({ path: 'screenshots/empty_task.png' });
  });

  test('Task with spaces cannot be added', async ({ page }) => {
    page.on('dialog', dialog => dialog.accept());
    await todoPage.addTask('   ');
    expect(await todoPage.taskExists('   ')).toBeFalsy();
    await page.screenshot({ path: 'screenshots/spaces_task.png' });
  });

  test('Input field clears after adding task', async ({ page }) => {
    await todoPage.addTask('Check Clear');
    const inputValue = await todoPage.taskInput.inputValue();
    expect(inputValue).toBe('');
    await page.screenshot({ path: 'screenshots/input_clear.png' });
  });

  test('Multiple tasks can be marked done independently', async ({ page }) => {
    const tasks = ['Task A', 'Task B'];
    for (const task of tasks) {
      await todoPage.addTask(task);
    }
    await todoPage.markTaskDone('Task A');
    expect(await todoPage.taskIsCompleted('Task A')).toBeTruthy();
    expect(await todoPage.taskIsCompleted('Task B')).toBeFalsy();
    await page.screenshot({ path: 'screenshots/multiple_mark_done.png' });
  });

  test('Delete all tasks', async ({ page }) => {
    const tasks = ['T1', 'T2', 'T3'];
    for (const t of tasks) {
      await todoPage.addTask(t);
    }
    for (const t of tasks) {
      await todoPage.deleteTask(t);
    }
    expect(await todoPage.taskExists('T1')).toBeFalsy();
    expect(await todoPage.taskExists('T2')).toBeFalsy();
    expect(await todoPage.taskExists('T3')).toBeFalsy();
    await page.screenshot({ path: 'screenshots/delete_all_tasks.png' });
  });

  test('Task text matches input', async ({ page }) => {
    const text = 'Final Task';
    await todoPage.addTask(text);
    expect(await todoPage.taskExists(text)).toBeTruthy();
    await page.screenshot({ path: 'screenshots/task_text.png' });
  });

});
