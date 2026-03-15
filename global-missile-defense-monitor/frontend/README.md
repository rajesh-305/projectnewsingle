# Global Missile Defense Monitor - Interactive Geopolitical Simulation

## Overview
The Global Missile Defense Monitor is an interactive geopolitical simulation web application designed to visualize and simulate missile launches and their implications on global security. This application is built using a microservices architecture, with separate services handling authentication, simulation, intelligence, alerts, and notifications.

## Frontend Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the frontend application, run the following command:
```
npm start
```
This will start the development server and open the application in your default web browser.

### Project Structure
- **src/**: Contains the source code for the frontend application.
  - **app.tsx**: Main entry point for the React application.
  - **pages/**: Contains the different pages of the application.
    - **Dashboard.tsx**: Displays overall statistics and visualizations.
    - **Simulation.tsx**: Handles the interactive missile launch simulation.
  - **components/**: Contains reusable components.
    - **MapView.tsx**: Renders the world map and country markers.
    - **Timeline.tsx**: Displays the timeline of missile launches.
  - **services/**: Contains API service functions for backend communication.
    - **api.ts**: Functions for making API calls to the backend services.

### Testing
To run tests, use the following command:
```
npm test
```

### Build
To create a production build of the application, run:
```
npm run build
```
This will generate a `build` directory containing the optimized production files.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.