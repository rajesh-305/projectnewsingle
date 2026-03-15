# Global Missile Defense Monitor - Interactive Geopolitical Simulation

## API Gateway

The API Gateway serves as the entry point for all client requests to the microservices in the Global Missile Defense Monitor application. It handles routing, authentication, and aggregation of responses from various services.

### Features

- **Routing**: Directs incoming requests to the appropriate microservice based on the defined routes.
- **Authentication**: Implements middleware for API key authentication to secure access to the services.
- **CORS Support**: Configures Cross-Origin Resource Sharing to allow requests from different origins.
- **Logging**: Integrates logging middleware to track requests and responses for debugging and monitoring.

### Setup

1. **Clone the Repository**: 
   ```bash
   git clone <repository-url>
   cd global-missile-defense-monitor/services/api-gateway
   ```

2. **Install Dependencies**: 
   ```bash
   npm install
   ```

3. **Run the Application**: 
   ```bash
   npm start
   ```

### Configuration

- Ensure that the environment variables for API keys and service URLs are set in your environment or in a `.env` file.
- Modify the `src/middleware/auth.ts` file to implement your authentication logic.

### Development

- The API Gateway is built using TypeScript and Express. 
- For adding new routes, update the `src/routes/index.ts` file.
- To add middleware, create new files in the `src/middleware` directory.

### Testing

- Unit tests can be added in the `__tests__` directory (create if it doesn't exist).
- Use Jest or any preferred testing framework for testing the API Gateway functionality.

### Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

### License

This project is licensed under the MIT License. See the LICENSE file for details.