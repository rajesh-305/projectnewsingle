# Global Missile Defense Monitor - Interactive Geopolitical Simulation

## Auth Service

The Auth Service is responsible for handling user authentication, including login and registration functionalities. It utilizes Express.js and MongoDB for managing user data.

### Features

- User registration
- User login
- Token-based authentication
- Password hashing and validation

### Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd global-missile-defense-monitor/services/auth-service
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env` file in the root of the `auth-service` directory and add the following variables:
   ```
   PORT=3001
   MONGODB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   ```

4. **Run the service:**
   ```bash
   npm start
   ```

### API Endpoints

- **POST /api/auth/register**
  - Registers a new user.
  
- **POST /api/auth/login**
  - Authenticates a user and returns a JWT token.

### Directory Structure

```
src/
├── app.ts               # Main application file
├── controllers/         # Contains authentication logic
│   └── auth.controller.ts
├── routes/              # Defines API routes
│   └── auth.routes.ts
└── models/              # Mongoose models
    └── user.model.ts
```

### Dependencies

- Express
- Mongoose
- bcryptjs
- jsonwebtoken
- dotenv

### Testing

To run tests, use the following command:
```bash
npm test
```

### License

This project is licensed under the MIT License. See the LICENSE file for details.