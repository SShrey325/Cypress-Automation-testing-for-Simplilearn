# Cypress Automation for SimpliLearn

## 🏁 Overview
Automate lead form submissions on Simplilearn's course pages using Cypress. This project extracts URLs from a CSV file, navigates to each course page, and executes form submissions seamlessly.

## 🔧 Setup & Installation

### Prerequisites
Ensure you have the following installed before getting started:
- [Node.js](https://nodejs.org/) (LTS recommended)
- [Cypress](https://www.cypress.io/)

### Installation Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/SShrey325/Cypress-Automation-testing-for-Simplilearn
   cd <project-folder>
   ```
2. Install required dependencies:
   ```sh
   npm install
   ```
3. Launch Cypress:
   ```sh
   npx cypress open
   ```

## 📂 Project Directory Structure
```
/project-root
│── cypress
│   ├── e2e
│   │   ├── leadForm.cy.js      # Test cases
│   ├── pages
│   │   ├── leadFormPage.js     # Page Object Model (POM) implementation
│   ├── fixtures                # Stores test data (CSV, JSON, etc.)
│   ├── downloads               # Contains any downloaded files
│   ├── support                 # Custom commands and utilities
│── package.json                # Dependencies and scripts
│── cypress.config.js           # Cypress configuration settings
│── README.md                   # Project documentation
```

## ⚙️ Configuration & Setup
- Adjust `cypress.config.js` to modify environment settings.
- Store test URLs in a CSV file for dynamic testing.
- **Faker.js** is utilized to generate random test data.

### Install Required Packages:
```sh
npm install @faker-js/faker --save-dev
npm install cypress-xpath --save-dev
npm install cypress-downloadfile --save-dev
```

### Using Faker.js in Tests:
```js
import { faker } from '@faker-js/faker';
import 'cypress-xpath';
import "cypress-downloadfile/lib/downloadFileCommand";
const randomEmail = faker.internet.email();
const randomName = faker.name.fullName();
```

## 🚀 Executing Tests

### Run Tests in Headed Mode:
```sh
npx cypress open
```

### Run Tests in Headless Mode:
```sh
npx cypress run
```

## 📝 Test Scenarios Covered
- ✅ Course application (`clickApplyNow` → `fillLeadForm`)
- ✅ Advisor consultation (`fillTalkToOurAdvisorForm`)
- ✅ Information request (`fillRequestMoreInfoForm`)

## 🔑 Best Practices
- Implement **Page Object Model (POM)** for improved test maintenance.
- Define selectors separately in `locators.js`.
- Manage test data via **fixtures**.
- Use **custom commands** stored in `support/commands.js`.
- Utilize **Faker.js** to dynamically generate input values.

## 🤝 Contributing
Want to contribute? Follow these steps:
1. Fork the repository.
2. Create a feature branch:
   ```sh
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```sh
   git commit -m "Implement new feature"
   ```
4. Push the branch:
   ```sh
   git push origin feature/your-feature
   ```
5. Open a Pull Request.

## 📜 License
Licensed under the MIT License.

---
🎯 Happy Testing with Cypress! 🚀
