# Books API

A simple REST API to manage a list of books using Node.js and Express.  
Books are stored in memory (no database).

## Features

- Add, view, update, and delete books
- Each book has an `id`, `title`, and `author`
- JSON API, easy to test with Postman

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed

### Installation

1. Clone or download this repository.
2. Open a terminal in the project folder.
3. Install dependencies:
    ```
    npm install
    ```

### Running the Server

```
node index.js
```

The server will start on [http://localhost:3000](http://localhost:3000).

## API Endpoints

### Get all books

- **GET** `/books`
- **Response:**  
  ```json
  [
    {
      "id": 1,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee"
    }
  ]
  ```

### Add a new book

- **POST** `/books`
- **Body:**  
  ```json
  {
    "title": "Book Title",
    "author": "Author Name"
  }
  ```
- **Response:**  
  ```json
  {
    "id": 2,
    "title": "Book Title",
    "author": "Author Name"
  }
  ```

### Update a book

- **PUT** `/books/:id`
- **Body:**  
  ```json
  {
    "title": "New Title",
    "author": "New Author"
  }
  ```
- **Response:**  
  Updated book object

### Delete a book

- **DELETE** `/books/:id`
- **Response:**  
  Status 204 (No Content)

## Example Books to Add

```json
{
  "title": "To Kill a Mockingbird",
  "author": "Harper Lee"
}
```
```json
{
  "title": "1984",
  "author": "George Orwell"
}
```
```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald"
}
```

## Testing

Use [Postman](https://www.postman.com/) or similar tools to test the endpoints.

---

**Note:** Data is stored in memory and will reset when the server restarts.