# Cypress Automation Project For SimpliLearn

## 📌 Introduction
This project automates the lead form submissions on course pages using Cypress. It reads URLs from a CSV file, navigates to each course page, and performs form submissions.

## 🚀 Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Cypress](https://www.cypress.io/)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/SoorajSundar1505/simpliLearnAutomation
   cd <project-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Open Cypress:
   ```sh
   npx cypress open
   ```

## 🏗 Project Structure
```
/project-root
│── cypress
│   ├── e2e
│   │   ├── leadForm.cy.js   # Test cases
│   ├── pages
│   │   ├── leadFormPage.js  # Page Object Model (POM) for lead form
│   ├── fixtures             # Test data (CSV, JSON, etc.)
│   ├── downloads            # Downloaded files (if any)
│   ├── support              # Custom commands, utilities
│── package.json             # Dependencies and scripts
│── cypress.config.js        # Cypress configuration
│── README.md                # Project documentation
```

## 🔧 Configuration
- Update `cypress.config.js` for environment settings.
- Place test URLs in the CSV file for dynamic testing.
- Faker.js is used for generating random test data.
  - Install Faker.js, cypress-xpath and downloadfile:
    ```sh
    npm install @faker-js/faker --save-dev
    npm install cypress-xpath --save-dev
    npm install cypress-downloadfile --save-dev
    ```
  - Example usage in test files:
    ```js
    import { faker } from '@faker-js/faker';
    import 'cypress-xpath';
    import "cypress-downloadfile/lib/downloadFileCommand";
    const randomEmail = faker.internet.email();
    const randomName = faker.name.fullName();
    ```

## 🎯 Running Tests
To run tests in **headed mode**:
```sh
npx cypress open
```
To run tests in **headless mode**:
```sh
npx cypress run
```

## 📋 Test Scenarios
- ✅ Apply for a course (`clickApplyNow` → `fillLeadForm`)
- ✅ Talk to an advisor (`fillTalkToOurAdvisorForm`)
- ✅ Request more information (`fillRequestMoreInfoForm`)

## 🛠 Best Practices
- Use **Page Object Model (POM)** for maintainability.
- Keep selectors in a separate `locators.js` file.
- Use **fixtures** for test data management.
- Implement **custom commands** in `support/commands.js`.
- Use **Faker.js** for generating dynamic test data.

## 💡 Contributing
1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```sh
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```sh
   git push origin feature/your-feature
   ```
5. Open a Pull Request.

## 📜 License
This project is licensed under the MIT License.

---
🚀 Happy Testing with Cypress! 🎯

