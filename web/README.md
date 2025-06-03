# Contact Form Project

This project implements a simple contact form with client-side validation using HTML, CSS, and JavaScript.

## Project Structure

- `index.html`: Contains the HTML structure of the contact form, including input fields for Name, Email, and Message, as well as a Submit button. It links to the CSS and JavaScript files.
- `style.css`: Contains the CSS styles for the contact form, ensuring clarity and a user-friendly layout.
- `script.js`: Includes the JavaScript code for client-side validation. It validates that the Name and Message fields are non-empty and that the Email field has a valid format using regex. It also handles displaying error messages and a success message upon valid submission.

## Usage Instructions

1. Open `index.html` in a web browser.
2. Fill in the Name, Email, and Message fields.
3. Click the Submit button.
4. If any fields are invalid, error messages will be displayed below the respective inputs.
5. If all fields are valid, a success message will be shown, and the form will not be submitted.

## Validation Process

- **Name and Message Fields**: Must not be empty.
- **Email Field**: Must follow a valid email format. The validation is performed using a regular expression.

## Testing

Make sure to test the following edge cases:
- Submitting the form with empty inputs.
- Entering an invalid email format.
- Using special characters in the Name and Message fields.

This project serves as a basic example of form validation and can be expanded with additional features as needed.