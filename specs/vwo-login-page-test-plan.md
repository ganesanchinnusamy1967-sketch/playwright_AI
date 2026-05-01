# VWO Login Page Basic Test Plan

## Application Overview

Basic functional test plan for the VWO login page at app.vwo.com, covering page elements, form validation, authentication flow, and supporting login options.

## Test Scenarios

### 1. Login Page Basic Tests

**Seed:** `seed.spec.ts`

#### 1.1. Login page loads and displays key elements

**File:** `specs/vwo-login-page-test-plan.md`

**Steps:**
  1. -
    - expect: The login page loads successfully at https://app.vwo.com/#/login
    - expect: The page title contains "Login - VWO"
    - expect: Email address input exists with placeholder "Enter email ID"
    - expect: Password input exists with placeholder "Enter password"
    - expect: Sign in button exists with text "Sign in"
    - expect: Forgot Password? link/button is visible
    - expect: Remember me checkbox and label are visible
    - expect: Sign in with Google, Sign in using SSO, and Sign in with Passkey options are visible

#### 1.2. Submit login with valid credentials

**File:** `specs/vwo-login-page-test-plan.md`

**Steps:**
  1. Click the Sign in button
    - expect: The login request is submitted
    - expect: User is redirected to the dashboard or expected authenticated landing page
    - expect: No error message is shown during successful authentication

#### 1.3. Validate required fields and missing input

**File:** `specs/vwo-login-page-test-plan.md`

**Steps:**
  1. Click the Sign in button
    - expect: A validation error is displayed for the Email address field
    - expect: The form is not submitted
    - expect: The user remains on the login page
  2. Click the Sign in button
    - expect: A validation error is displayed for the Password field
    - expect: The form is not submitted
    - expect: The user remains on the login page

#### 1.4. Validate invalid email and incorrect credentials

**File:** `specs/vwo-login-page-test-plan.md`

**Steps:**
  1. Enter a password and click Sign in
    - expect: An email format validation error appears
    - expect: The form is not submitted
  2. Click the Sign in button
    - expect: An authentication error message is shown
    - expect: The user is not logged in
    - expect: The login form remains available for retry

#### 1.5. Check Remember me and auxiliary login options

**File:** `specs/vwo-login-page-test-plan.md`

**Steps:**
  1. Check the Remember me checkbox
    - expect: The checkbox state changes to checked
    - expect: The label remains visible
  2. Click the Forgot Password? link/button
    - expect: The forgotten password workflow or reset page is opened
    - expect: The user is able to initiate password recovery
  3. Click the Sign in with Google button
    - expect: The Google authentication flow starts or Google login redirect appears
  4. Click the Sign in using SSO button
    - expect: The SSO login flow starts or SSO provider selection appears
  5. Click the Sign in with Passkey option
    - expect: The passkey authentication flow starts or passkey prompt appears

#### 1.6. Verify page links and policy text

**File:** `specs/vwo-login-page-test-plan.md`

**Steps:**
  1. -
    - expect: A "Don't have an account? Start a free trial" link is present
    - expect: Privacy policy and Terms links or text are visible
    - expect: Links open the expected pages or dialogs when clicked
