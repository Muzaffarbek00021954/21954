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

app.js  
package.json

routes/
   plants.js

controllers/
   plantsController.js

views/
   layout.pug
   index.pug
   plants.pug
   create.pug
   edit.pug

public/
   styles/
      style.css
      index-styles.css
      plants-styles.css

### Folder and File Descriptions

- **app.js**: Main application entry point; sets up the Express server and middleware.
- **package.json**: Project metadata and dependencies.
- **routes/**: Defines application routes and maps them to controllers.
  - **plants.js**: Route definitions for plant-related endpoints.
- **controllers/**: Contains controller logic for handling requests and responses.
  - **plantsController.js**: Handles business logic for plant operations.
- **views/**: Pug templates for rendering HTML pages.
  - **layout.pug**: Base layout template.
  - **index.pug**: Home or main listing page.
  - **plants.pug**: Plant list or detail view.
  - **create.pug**: Form for adding a new plant.
  - **edit.pug**: Form for editing an existing plant.
- **public/**: Static files served directly to the client (CSS, images, JS).
  - **styles/**: CSS stylesheets for the app.
    - **style.css**: General styles.
    - **index-styles.css**: Styles specific to the index page.
    - **plants-styles.css**: Styles specific to plant pages.
  - **images/**: Image assets (if used).
