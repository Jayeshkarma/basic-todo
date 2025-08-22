# React + Vite

This project is built using React and Vite, providing a fast and efficient development environment with Hot Module Replacement (HMR) and ESLint integration.

## Features

- Minimal setup for React development with Vite.
- Hot Module Replacement for seamless development.
- ESLint configuration for code quality and consistency.
- Task management system implemented in `App.jsx`.

## Plugins Used

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react): Uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc): Uses [SWC](https://swc.rs/) for Fast Refresh.

## App.jsx Overview

The `App.jsx` file implements a task management system with the following features:

- **Task Creation**: Add tasks with attributes like title, description, due date, and assigned person.
- **Task Categorization**: Automatically categorize tasks into "Pending," "In Progress," and "Completed" based on their status.
- **Status Updates**: Update task statuses to track progress.
- **User Interface**: A simple and intuitive UI for managing tasks efficiently.

## Setup Instructions

Follow these steps to set up the project locally:

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd basic-todo
   ```

3. **Install Dependencies**:

   ```bash
   yarn install
   ```

4. **Start the Development Server**:

   ```bash
   yarn dev
   ```

5. **Access the Application**:
   Open your browser and navigate to the URL provided by the development server.

## Additional Notes

- Ensure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed on your system.
- Customize the ESLint configuration as needed for production applications.
