# Plant Management Web Application

## About the App

This is a simple web application for managing a collection of plants. Users can view, add, edit, and delete plant records. The app is built using Node.js, Express, and Pug for server-side rendering, and follows a clear MVC (Model-View-Controller) structure for maintainability and scalability.

## How to Run the App Locally

1. **Clone the repository:**
   ```pwsh
   git clone https://github.com/Muzaffarbek00021954/Home-gardening-Asistant-21954.git
   cd <project-folder>
   ```
2. **Install dependencies:**
   ```pwsh
   npm install
   ```
3. **Start the application:**
   ```pwsh
   node app.js
   ```
4. **Open your browser and go to:**
   ```
   http://localhost:3000
   ```

## Application Dependencies

- express
- pug
- body-parser
- express-validator

## Links

- **GitHub Repository:** [Your GitHub Repo Link](https://github.com/Muzaffarbek00021954/Home-gardening-Asistant-21954.git)
- **Hosted Application:** [Live Demo Link](https://home-gardening-assistant.onrender.com)

## Project Structure

The project is organized as follows:

```
├── app.js                  # Main application entry point
├── package.json            # Project metadata and dependencies
├── controllers/            # Controller files for handling business logic
│   └── plantsController.js
├── public/                 # Static assets (CSS, images, JS)
│   └── styles/
│       ├── index-styles.css
│       ├── plants-styles.css
│       └── style.css
├── routes/                 # Route definitions
│   └── plants.js
├── services/               # Service files (business logic, data access)
├── views/                  # Pug templates for server-side rendering
│   ├── create.pug
│   ├── edit.pug
│   ├── index.pug
│   ├── layout.pug
│   └── plants.pug
```

- **app.js**: Main entry point that sets up the Express server and middleware.
- **controllers/**: Contains controller logic for handling requests and responses.
- **public/**: Static files served directly to the client (CSS, images, JS).
- **routes/**: Defines application routes and maps them to controllers.
- **services/**: Contains business logic and data access code (if any).
- **views/**: Pug templates for rendering HTML pages.
