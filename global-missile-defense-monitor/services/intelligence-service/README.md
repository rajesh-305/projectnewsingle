# Global Missile Defense Monitor - Interactive Geopolitical Simulation

## Overview
The Intelligence Service is a critical component of the Global Missile Defense Monitor application. It is responsible for managing and processing intelligence data related to missile launches, including threat assessments and analysis.

## Service Structure
The Intelligence Service follows a microservices architecture and is built using Node.js and Express. It interacts with a MongoDB database to store and retrieve intelligence data.

### Directory Structure
```
intelligence-service/
├── src/
│   ├── app.ts                  # Main application file
│   ├── controllers/
│   │   └── intelligence.controller.ts  # Controller for handling intelligence data
│   ├── routes/
│   │   └── intelligence.routes.ts      # Routes for the intelligence service
│   └── models/
│       └── threat.model.ts            # Mongoose schema for threat intelligence data
├── package.json             # Dependencies and scripts for the intelligence service
├── tsconfig.json            # TypeScript configuration options for the intelligence service
└── README.md                # Documentation for setting up and running the intelligence service
```

## Setup Instructions
1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd global-missile-defense-monitor
   ```

2. **Install Dependencies**
   Navigate to the `intelligence-service` directory and install the required packages:
   ```bash
   cd services/intelligence-service
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the `intelligence-service` directory and set the necessary environment variables, such as database connection strings.

4. **Run the Service**
   Start the intelligence service using the following command:
   ```bash
   npm start
   ```

5. **Access the API**
   The intelligence service will be available at `http://localhost:<port>/api/intelligence`. Replace `<port>` with the port specified in your configuration.

## API Endpoints
- **GET /api/intelligence**: Retrieve all intelligence data.
- **POST /api/intelligence**: Submit new intelligence data.
- **GET /api/intelligence/:id**: Retrieve intelligence data by ID.
- **PUT /api/intelligence/:id**: Update intelligence data by ID.
- **DELETE /api/intelligence/:id**: Delete intelligence data by ID.

## Development
- Ensure to follow the coding standards and practices outlined in the project's documentation.
- Use TypeScript for type safety and better maintainability.
- Write unit tests for all new features and functionalities.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.