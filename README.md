# RESTful API Test Automation with Playwright

[![Playwright Tests](https://github.com/pedinistar/RESTful-API-Test-Automation-with-Playwright/actions/workflows/playwright.yml/badge.svg)](https://github.com/pedinistar/RESTful-API-Test-Automation-with-Playwright/actions/workflows/playwright.yml)
![Node.js Version](https://img.shields.io/badge/node-%3E%3D18-brightgreen)
![Playwright](https://img.shields.io/badge/Playwright-1.40-orange)

Automated API testing framework for JSONPlaceholder REST API using Playwright's API testing capabilities.


## Features

- ✅ 25+ automated API test cases
- ✅ Tests for GET, POST, PUT, DELETE operations
- ✅ Data-driven testing approach
- ✅ Response validation (status codes, headers, body)
- ✅ CI/CD integration with GitHub Actions
- ✅ HTML test reports

## Tech Stack

- **Playwright** - API testing framework
- **JavaScript** - Programming language
- **Node.js** - Runtime environment
- **GitHub Actions** - CI/CD pipeline

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation
```bash
# Clone the repository
git clone https://github.com/pedinistar/RESTful-API-Test-Automation-with-Playwright.git

# Navigate to project directory
cd RESTful-API-Test-Automation-with-Playwright

# Install dependencies
npm install

# Install Playwright
npx playwright install
```

## Running Tests
```bash
# Run all tests
npx playwright test

# Run specific test file
npx playwright test tests/get-requests.spec.ts

# Run tests in headed mode
npx playwright test --headed

# Run tests with UI
npx playwright test --ui

# Generate HTML report
npx playwright show-report
```

## Test Coverage

| Test Category | Test Count |
|--------------|------------|
| GET Requests | 8 |
| POST Requests | 3 |
| PUT Requests | 5 |
| DELETE Requests | 3 |
| Data-Driven Tests | 2 |
| **Total** | **21** |

## Project Structure
```
api-testing-playwright/
├── tests/
│   ├── get-requests.spec.ts
│   ├── post-requests.spec.ts
│   ├── put-requests.spec.ts
│   ├── delete-requests.spec.ts
│   └── data-driven.spec.ts
├── utils/
│   └── test-data.ts
├── playwright.config.ts
└── README.md
```

<!-- ## 📸 Demo

### Test Execution
![Test Execution](screenshots/test-run.png)

### Test Report
![Test Report](screenshots/test-report.png)

### CI/CD Pipeline
![CI/CD](screenshots/github-actions.png) -->

## API Under Test

**JSONPlaceholder**: https://jsonplaceholder.typicode.com/

A free fake REST API for testing and prototyping.

## CI/CD

Tests run automatically on:
- Every push to main branch
- Every pull request
- Daily schedule (midnight UTC)

## Contributing

Feel free to fork and submit PRs!


## Author

**Pedini Jayashree**
- LinkedIn: [https://www.linkedin.com/in/jayashree14/]
