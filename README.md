# Todo-App
# Todo App - QA Assignment for DevVoid

This repository contains a simple **Todo App** created for the **DevVoid QA Engineer assignment**.  
It includes both **manual testing artifacts** and a **Playwright automation suite**.

---

## Features
- Add a new task
- Delete a task
- Delete all tasks
- Validate empty task input
- Mark task as done/undone
- Responsive design (desktop, tablet, mobile)
- Works on Chrome, Edge, and Firefox

---

## Manual Testing Artifacts
- **Test Plan Document** – Overview, scope, strategy, environment, entry/exit criteria  
- **Test Cases Spreadsheet** – 15+ test cases covering positive, negative, and edge scenarios  
- **Bug Report Document** – 5–8 sample bugs with severity, priority, steps, expected vs actual, screenshots

---

## Automation Suite (Playwright)
- 50 automated tests covering all critical flows
- Cross-browser and mobile testing
- Page Object Model used for maintainability
- Screenshots captured for key actions

---

## Project Structure

/todo-app
├─ index.html
├─ style.css
├─ app.js
├─ tests/
├─ todo.spec.js
└─ todoPage.js
├─ package.json
├─ playwright.config.js
├─ screenshots/
└─ README.md



---

## Prerequisites
- Node.js >= 18.x
- npm or pnpm installed

---

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/YourUsername/Todo-App.git



#Navigate to the project folder:

- cd Todo-App


#Install dependencies:

- npm install


#Install Playwright browsers:

- npx playwright install


#Run all tests:

- npx playwright test


#Run tests with 1 worker:

- npx playwright test --workers=1


#Open HTML test report:

- npx playwright show-report


#NOTE
Screenshots / Test Reports

All automated test screenshots and HTML reports are available in the screenshots/ folder.
