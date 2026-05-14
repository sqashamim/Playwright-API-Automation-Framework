<div align="center">

# 🚀 Playwright API Automation Framework

### Scalable API Automation Testing Framework using Playwright & TypeScript

<img src="https://img.shields.io/badge/Playwright-API_Testing-2EAD33?style=for-the-badge&logo=playwright&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-Automation-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Node.js-Framework-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub_Actions-CI/CD-2088FF?style=for-the-badge&logo=githubactions&logoColor=white"/>

</div>

---

# 📌 Project Overview

A scalable and maintainable API Automation Testing Framework built with Playwright and TypeScript, designed using reusable modular architecture and integrated with GitHub Actions CI/CD pipeline for automated test execution and reporting.

The framework follows industry-standard automation practices to ensure:

- Scalability
- Reusability
- Maintainability
- Continuous Integration Support

---

# 🛠️ Tech Stack

- Playwright
- TypeScript
- Node.js
- REST API Testing
- GitHub Actions
- CI/CD Pipeline
- HTML Reporting

---

# 📂 Project Structure

```bash
Playwright-API-Automation-Framework/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── tests/
│   ├── getBooking.spec.ts
│   ├── createBooking.spec.ts
│   ├── getCreatedBooking.spec.ts
│   ├── updateBooking.spec.ts
│   └── deleteBooking.spec.ts
│
├── utils/
│   ├── authHelper.ts
│   └── bookingHelper.ts
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

# ⚡ Features

## ✅ API Automation Testing

- REST API Request Handling
- GET, POST, PUT, DELETE Validation
- Response Validation
- Status Code Verification
- Dynamic Data Handling
- API Chaining

---

## ✅ Reusable Framework Design

- Modular Architecture
- Reusable Helper Functions
- Centralized Request Handling
- Maintainable Framework Structure

---

## ✅ Reporting & Debugging

- HTML Test Reporting
- Console Logging
- Failure Tracking
- Execution Insights

---

## ✅ GitHub Actions CI/CD

GitHub Actions is integrated for continuous integration and automated test execution.

### CI Workflow Features

- Automated Execution on Push
- Dependency Installation
- Playwright Browser Setup
- API Test Execution
- HTML Report Artifact Upload

### Workflow Location

```bash
.github/workflows/playwright.yml
```

---

# 🚀 Getting Started

## 📥 Clone Repository

```bash
git clone <repository-url>
```

---

## 📦 Install Dependencies

```bash
npm install
```

---

## 🎭 Install Playwright Browsers

```bash
npx playwright install
```

---

# ▶️ Run Tests

## 🚀 Run All API Tests

```bash
npx playwright test
```

---

## 🎯 Run Specific Test File

```bash
npx playwright test tests/updateBooking.spec.ts
```

---

## 📊 Open HTML Report

```bash
npx playwright show-report
```

---

# 🌐 API Used

🔗 Restful Booker API

https://restful-booker.herokuapp.com/apidoc/index.html

---

# 📈 Future Enhancements

- Environment Configuration Management
- API Schema Validation
- Docker Integration
- Advanced Reporting
- Parallel Execution Optimization

---

# 👨‍💻 Author

Developed by **Samsuzzoha Shamim**


---

<div align="center">

# ⭐ If you found this project useful, consider giving it a star ⭐  

</div>