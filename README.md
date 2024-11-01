# Book Store E-Commerce Application

This is a full-stack e-commerce application for a bookstore. It features a secure integration with Stripe for handling payments and uses environment variables to protect sensitive data.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Stripe Integration](#stripe-integration)


---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/book_store.git
   cd book_store
   ```
2. Navigate to Backend Folder: 
   ```bash
   cd src/backend
   ```
3. Install Dependencies:
   ```bash
   Copy code
   npm install
   ```
4. Install Frontend Dependencies:
    Navigate back to the root and install frontend dependencies.
    ```
    npm install
    ```
## Environment Variables
  To secure sensitive information, environment variables are stored in a .env file excluded from version control.'
  ```
  touch src/backend/.env
  ```
6. Add the Stripe Secret Key to .env:
  ```
  STRIPE_SECRET_KEY=sk_test_yourSecretKeyHere
  ```
7. Update server.js to Load Environment Variables
```
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
```
8. Ignore .env in Git:
Add .env to .gitignore to keep it secure:
```
# Ignore .env file
.env
```
## Usage
9. Start Backend Server:
Go to the backend directory and start the server:
```
Node server.js
```
10. Start Frontend:
```
npm start
```

## Stripe Integration
This project uses Stripe for payment processing. Ensure you have a Stripe account and obtain your API keys from the Stripe Dashboard.

Publishable Key: Used in the front end.
Secret Key: Used in the backend (stored in .env).
Testing Payments
Use Stripe's test card numbers to simulate payments in development. For example, 4242 4242 4242 4242 with any valid future expiration date and a random CVC.

Important
Ensure that your .env file is not committed to version control. Sensitive keys should be handled securely.
Only use test keys for development. For production, ensure secure handling of live keys.
