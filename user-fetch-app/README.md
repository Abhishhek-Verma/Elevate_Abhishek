# User Fetch App

## Overview
The User Fetch App is a simple web application that fetches user data from a public API and displays it on a webpage. It utilizes the Fetch API to retrieve user information, including names, emails, and addresses, and presents this data in a user-friendly format. The application also includes error handling and a reload button to refresh the data.

## Features
- Fetches user data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users).
- Displays user names, emails, and addresses.
- Error handling for network issues.
- A reload button to refetch the data.

## Project Structure
```
user-fetch-app
├── src
│   ├── index.html      # HTML structure of the webpage
│   ├── style.css       # CSS styles for the webpage
│   └── app.js          # JavaScript code for fetching and displaying user data
├── package.json        # Configuration file for npm
└── README.md           # Documentation for the project
```

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd user-fetch-app
   ```
3. Install dependencies (if any):
   ```
   npm install
   ```

### Running the Application
1. Open `src/index.html` in your web browser.
2. Click the "Reload Data" button to fetch and display user information.

## Usage
- The application will display a list of users with their names, emails, and addresses.
- In case of a network error, an appropriate message will be shown.
- Use the reload button to fetch the latest data from the API.

## License
This project is licensed under the MIT License.