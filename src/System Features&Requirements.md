# 3. System Features and Requirements

## 3.1 Functional Requirements (User Stories)

Event Creation

- As a user, I want to be able to create events through the LeadsCalendar interface.
- As a user, I want to provide event details such as title, date, time, location, and description.
- As a user, I want to specify event attendees and invite them via email.

Payment Processing

- As a user, I want to be prompted to make a payment of 1 USD or its equivalent in cryptocurrency upon event creation.
- As a user, I want to be redirected to PayPal or Binance Pay for payment processing.
- As a user, I want to receive confirmation of successful payment before the event is confirmed.

## 3.2 External Interface Requirements

Google Calendar API

- Enables integration with Google Calendar for event creation and scheduling.
- Provides functionalities for retrieving, creating, updating, and deleting events.
- Enables users to authorize

PayPal API

- Facilitates payment processing for event registrations.

Binance Pay API

- Supports cryptocurrency payment processing for event registrations.

## 3.3 System Features

Event Management

- Provides a user-friendly interface for creating, viewing, and managing events.
- Allows users to update event details, invite attendees, and track event status.

Payment Integration

- Integrates with PayPal and Binance Pay APIs to facilitate secure payment processing.

Notification System

- Sends email notifications to users upon successful event creation and payment processing.
- Provides real-time updates on event status, payment confirmation, and attendee responses.

## 3.4 Nonfunctional Requirements

Performance

- QA1 - The system should respond to user actions within 2 seconds under normal load conditions.
- QA2 - Payment processing transactions should be completed within 10 seconds on average.

Security

- QA3 - User data and payment information should be encrypted and stored securely in compliance with industry standards.
- QA4 - APIs should use secure authentication mechanisms (e.g., OAuth) to prevent unauthorized access.

Reliability

- QA5 - The system should have an uptime of at least 99.9% to ensure availability for users.
- QA6 - Payment transactions should be processed reliably without errors or interruptions.
- QA7 - Logging should be performed in order to prove/disprove money flow in the application
- QA8 - Refund mechanism should be implemented in case transduction did not succeeded.

Usability

- QA9 - The user interface should be intuitive and easy to navigate, with clear instructions for event creation and payment processing.
- QA10 - Error messages should be informative and actionable, guiding users to resolve issues effectively.

Scalability

- QA11 - The system should be able to handle a large number of concurrent users and events without degradation in performance.
- QA12 - Payment processing infrastructure should scale dynamically to accommodate fluctuations in transaction volume.

For the quality attributes scenario see [QAS](./QAS.md)

## See also

- [Project description](./OverallDescription.md)
- [QAS](./QAS.md)
