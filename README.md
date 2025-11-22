# RESTful API Test Automation with Playwright

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
npx playwright test tests/get-requests.spec.js

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
| POST Requests | 6 |
| PUT Requests | 5 |
| DELETE Requests | 3 |
| Data-Driven Tests | 3 |
| **Total** | **25** |

## Project Structure
```
api-testing-playwright/
├── tests/
│   ├── get-requests.spec.js
│   ├── post-requests.spec.js
│   ├── put-requests.spec.js
│   ├── delete-requests.spec.js
│   └── data-driven.spec.js
├── utils/
│   └── test-data.js
├── playwright.config.js
└── README.md
```

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