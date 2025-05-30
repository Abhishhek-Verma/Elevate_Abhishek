# Responsive Website

This project aims to convert a desktop-only webpage into a mobile-friendly layout using CSS media queries. The website is structured to ensure a seamless experience across different devices, particularly focusing on mobile viewports.

## Project Structure

```
responsive-website
├── src
│   ├── index.html        # HTML structure of the website
│   ├── styles
│   │   └── style.css     # CSS styles including media queries for responsiveness
│   └── scripts
│       └── main.js       # JavaScript for interactive elements
├── README.md             # Project documentation
```

## Getting Started

To set up the project locally, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd responsive-website
   ```

2. **Open the Project**
   Open the project folder in your preferred code editor.

3. **Open the HTML File**
   Navigate to `src/index.html` to view the HTML structure.

4. **Update CSS for Responsiveness**
   Modify `src/styles/style.css` to include media queries that target a maximum width of 768px. This will adjust the layout for mobile devices, stack columns vertically, reduce font sizes, and ensure images scale within their containers.

5. **Implement JavaScript for Navigation**
   Use `src/scripts/main.js` to add functionality for collapsing the navigation menu on mobile devices.

## Testing

To test the responsive design:

1. Open `index.html` in a web browser.
2. Use Chrome DevTools (F12) and toggle the device toolbar to simulate different screen sizes.
3. Verify that the layout adjusts correctly for mobile viewports, ensuring no overflow or scrolling issues.

## Conclusion

This project demonstrates the importance of responsive design in modern web development. By utilizing CSS media queries and JavaScript, the website will provide an optimal viewing experience across a variety of devices.