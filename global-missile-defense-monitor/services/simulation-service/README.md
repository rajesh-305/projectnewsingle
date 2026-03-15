# Global Missile Defense Monitor - Interactive Geopolitical Simulation

## Simulation Service

The Simulation Service is a microservice responsible for handling missile launch simulations within the Global Missile Defense Monitor application. This service provides endpoints for creating, updating, and retrieving simulation scenarios.

### Features

- **Scenario Management**: Create, update, and delete missile launch scenarios.
- **Simulation Execution**: Execute simulations based on defined scenarios and return results.
- **Data Persistence**: Store simulation scenarios in a MongoDB database.

### Getting Started

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd global-missile-defense-monitor/services/simulation-service
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configuration**:
   Ensure that your MongoDB connection string is set in the environment variables or configuration file.

4. **Run the Service**:
   ```bash
   npm start
   ```

### API Endpoints

- **POST /api/simulation/scenarios**: Create a new simulation scenario.
- **GET /api/simulation/scenarios**: Retrieve all simulation scenarios.
- **GET /api/simulation/scenarios/:id**: Retrieve a specific simulation scenario by ID.
- **PUT /api/simulation/scenarios/:id**: Update a specific simulation scenario by ID.
- **DELETE /api/simulation/scenarios/:id**: Delete a specific simulation scenario by ID.

### Development

- **Testing**: Ensure to write unit tests for your controllers and models.
- **Linting**: Use ESLint to maintain code quality.
- **Documentation**: Update this README file as necessary to reflect changes in the API or service functionality.

### License

This project is licensed under the MIT License. See the LICENSE file for details.