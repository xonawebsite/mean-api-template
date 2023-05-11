# CHANGELOG

## v0.1.1
- Added nodemailer
- Light Refator
    - routes, renamed to controllers
    - Every file indicates which type of data is inside (e.g. auth.model.ts && auth.controller.ts && auth.mailer.ts vs auth.ts && auth.ts && auth.ts)
- Mailers implementation (ruby-on-rails-like)
- Helpers implementation (ruby-on-rails-like)
- Auth improvements:
    - Forgotten password recovery
    - Welcome email
    - Email address confirmation
    - Email address change
- User model improvements
    - name, referred (usefull if you want to implement a referral-system feature), and emailConfirmed fields
- Session model for managing request to change data in users
- Added user controller
    - User profile retrieving endpoint
    - User profile updating endpoint
    - User password change endpoint

## v0.1.0
- Initial project structure
A simple express app with a authentication sub app and several packages one usually add to an api project as a boilerplate.
- Helmet to aim security issues
- Very basic user model
- Signup and Login endpoints
- Auth middleware to restrict api-token and jwt based requests
- Auth middleware barebones for require a certain level for the user
- Fallback errors (404 & 500)
