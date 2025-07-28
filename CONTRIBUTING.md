# Contributing to HyperFi

Thank you for your interest in contributing to HyperFi! We welcome contributions from the community to help make Bitcoin DeFi more accessible to everyone.

## How to Contribute

### Reporting Bugs

If you find a bug in the project:

1. Check if the bug has already been reported in the Issues section.
2. If not, create a new issue with a clear description of the bug, including:
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Screenshots (if applicable)
   - Environment details (browser, OS, etc.)

### Suggesting Features

We're always looking for ways to improve HyperFi. To suggest a feature:

1. Check if the feature has already been suggested in the Issues section.
2. If not, create a new issue with a clear description of the feature, including:
   - The problem it solves
   - How it should work
   - Why it would be valuable to users

### Pull Requests

We welcome pull requests! To submit a PR:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Run tests to ensure everything works
5. Commit your changes (`git commit -m 'Add some feature'`)
6. Push to the branch (`git push origin feature/your-feature-name`)
7. Open a Pull Request

## Development Setup

### Frontend

```bash
# Navigate to the frontend directory
cd HyperFi_frontend-main

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
```

### Smart Contracts

```bash
# Navigate to the Hardhat directory
cd HyperFi/packages/hardhat

# Install dependencies
npm install
# or
yarn install

# Compile contracts
npx hardhat compile

# Run tests
npx hardhat test
```

## Code Style Guidelines

- Use ESLint and Prettier for JavaScript/TypeScript code
- Follow Solidity style guide for smart contracts
- Write clear, descriptive commit messages
- Include comments for complex logic
- Write tests for new features

## Testing

- All new features should include appropriate tests
- Run existing tests before submitting a PR
- For frontend changes, test on multiple browsers

## Documentation

- Update documentation when changing functionality
- Use clear, concise language
- Include code examples where appropriate

## Community Guidelines

- Be respectful and inclusive
- Help others when you can
- Provide constructive feedback
- Follow the code of conduct

Thank you for contributing to HyperFi and helping us bring DeFi to Bitcoin! 