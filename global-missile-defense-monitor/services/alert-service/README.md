# Alert Service Documentation

## Overview

The Alert Service is a microservice responsible for managing alerts related to missile launches within the Global Missile Defense Monitor application. It provides endpoints for creating, retrieving, updating, and deleting alerts, ensuring that users are notified of critical events in real-time.

## Features

- Create alerts for missile launches
- Retrieve alerts based on various criteria
- Update existing alerts
- Delete alerts when no longer needed

## Architecture

The Alert Service is built using Node.js and Express, following a microservices architecture. It communicates with other services through RESTful APIs and utilizes MongoDB for data storage.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (for local development)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd global-missile-defense-monitor/services/alert-service
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Service

To start the Alert Service, run the following command:
```
npm start
```

The service will be available at `http://localhost:3000` (or the port specified in your configuration).

### API Endpoints

- **POST /alerts**: Create a new alert
- **GET /alerts**: Retrieve all alerts
- **GET /alerts/:id**: Retrieve a specific alert by ID
- **PUT /alerts/:id**: Update an existing alert by ID
- **DELETE /alerts/:id**: Delete an alert by ID

## Testing

To run tests for the Alert Service, use the following command:
```
npm test
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any inquiries or issues, please contact the development team at [support@example.com].