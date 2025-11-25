# RESTful API Test Automation with Playwright


![Playwright Tests](https://github.com/pedinistar/RESTful-API-Test-Automation-with-Playwright/actions/workflows/playwright.yml/badge.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?logo=playwright&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue)

> A comprehensive REST API testing framework demonstrating modern test automation practices with Playwright. Features include data-driven testing, CI/CD integration, and intentional failure testing to showcase real-world API limitations.


## Features

- ✅ 27 automated API test cases
- ✅ Tests for GET, POST, PUT, DELETE operations
- ✅ Data-driven testing approach
- ✅ Response validation (status codes, headers, body)
- ✅ CI/CD integration with GitHub Actions
- ✅ HTML test reports

## Tech Stack

- **Playwright** - API testing framework
- **TypeScript** - Programming language
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
| PUT Requests | 4 |
| DELETE Requests | 3 |
| Data-Driven Tests | 9 | 
| **Total** | **27** |

## 📋 Test Case Documentation

Detailed test cases with pre-conditions, steps, and expected results are documented in:
- Test Case sheet is in docs folder
- [Test Case Specification](https://docs.google.com/spreadsheets/d/1UBj2W_RnPmmCuRkp93y7dPKnmcBqlrmedOg1rReInYc/edit?usp=sharing)


### Key Test Scenarios:
- ✅ CRUD operations validation
- ✅ Response time verification (< 2000ms)
- ✅ Special character handling
- ✅ Invalid input validation
- ✅ Data-driven testing with multiple datasets

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

## 📸 Demo

### Test Execution
![Test Execution](screenshots/test-run.png)

### Test Report
![Test Report](screenshots/test-report-1.png)
![Test Report](screenshots/test-report-2.png)
![Test Report](screenshots/test-report-3.png)

### CI/CD Pipeline
![CI/CD](screenshots/github-actions.png)

## API Under Test

**JSONPlaceholder**: https://jsonplaceholder.typicode.com/

A free fake REST API for testing and prototyping.

## ⚠️ Known Issues / API Limitations

JSONPlaceholder is a mock API with some limitations:

1. **TC010 - Missing Title Validation**: API accepts posts without required fields
   - Expected: 400 Bad Request
   - Actual: 201 Created
   
2. **TC014 - Non-existent Resource Update**: Returns 500 instead of 404
   - Expected: 404 Not Found
   - Actual: 500 Internal Server Error

3. **TC015 - Update with invalid data**: Returns 200 instead of 400
   - Expected: 400 Bad Request
   - Actual: 200 OK

4. **TC017 - Delete Non-existent Post**: Returns 200 for non-existent resources
   - Expected: 404 Not Found
   - Actual: 200 OK

5. **TC018 - Verify response body after deletion**: Returns {} 200 OK for deleted resource
   - Expected: 404 Not Found
   - Actual: 200 OK

6. **TC021 - Handle invalid userid**: Returns 200
   - Expected: 404 Invalid Type
   - Actual: 200 OK

These tests are marked with `test.fail()` to document expected behavior vs actual API responses.

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
