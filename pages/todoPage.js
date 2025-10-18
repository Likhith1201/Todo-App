// pages/todoPage.js

class TodoPage {
    constructor(page) {
        this.page = page;
        this.taskInput = page.locator('#taskInput');
        this.addTaskBtn = page.locator('#addTaskBtn');
        this.taskList = page.locator('#taskList li');
    }

    async goto() {
        await this.page.goto('file://' + __dirname.replace('pages', '') + '/index.html');
    }

    async addTask(taskName) {
        await this.taskInput.fill(taskName);
        await this.addTaskBtn.click();
    }

    async deleteTask(taskName) {
        const task = this.page.locator('.task-text', { hasText: taskName }).locator('..').locator('.deleteBtn');
        await task.click();
    }

    async markTaskDone(taskName) {
        const task = this.page.locator('.task-text', { hasText: taskName });
        await task.click();
    }

    async taskExists(taskName) {
        return await this.page.locator('.task-text', { hasText: taskName }).count() > 0;
    }

    async taskIsCompleted(taskName) {
        const task = this.page.locator('.task-text', { hasText: taskName });
        return await task.getAttribute('class').then(cls => cls.includes('completed'));
    }
}

module.exports = { TodoPage };
