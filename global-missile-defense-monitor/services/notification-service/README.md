# Notification Service

The Notification Service is a microservice responsible for handling notifications related to missile launches within the Global Missile Defense Monitor application. This service is designed to send alerts and notifications to users based on specific events and triggers in the system.

## Features

- **Notification Handling**: Processes and sends notifications to users based on missile launch events.
- **Worker Implementation**: Utilizes a worker pattern to manage notification sending in the background.
- **RESTful API**: Exposes endpoints for managing notifications and triggering alerts.

## Architecture

The Notification Service is built using Node.js and Express, following a microservices architecture. It communicates with other services through HTTP requests and can be deployed independently.

## Setup Instructions

1. **Clone the Repository**: 
   ```
   git clone <repository-url>
   cd global-missile-defense-monitor/services/notification-service
   ```

2. **Install Dependencies**: 
   ```
   npm install
   ```

3. **Run the Service**: 
   ```
   npm start
   ```

4. **Access the API**: The service will be available at `http://localhost:<port>/api/notifications`.

## Endpoints

- **GET /api/notifications**: Retrieve a list of notifications.
- **POST /api/notifications**: Create a new notification.
- **DELETE /api/notifications/:id**: Delete a notification by ID.

## Development

- Ensure you have Node.js and npm installed.
- Follow the coding standards and practices outlined in the project's documentation.
- Use TypeScript for type safety and better maintainability.

## Testing

- Run tests using the command:
  ```
  npm test
  ```

## License

This project is licensed under the MIT License. See the LICENSE file for details.