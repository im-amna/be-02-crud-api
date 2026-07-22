# Task API (BE-02 CRUD API)

A simple CRUD API built with **Node.js** and **Express**. The API manages an in-memory to-do list and supports creating, reading, updating, and deleting tasks. Swagger UI is included for interactive API testing.

## Features

- Create a task
- Get all tasks
- Get a task by ID
- Update a task
- Delete a task
- Health check endpoint
- Swagger UI documentation

## Technologies Used

- Node.js
- Express.js
- Swagger UI Express

## Installation

Clone the repository:

```bash
git clone https://github.com/im-amna/be-02-crud-api.git
```

Go to the project folder:

```bash
cd be-02-crud-api
```

Install dependencies:

```bash
npm install
```

## Run the Project

```bash
node server.js
```

Server runs at:

```
http://localhost:3000
```

Swagger UI:

```
http://localhost:3000/docs
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | / | API Information |
| GET | /health | Health Check |
| GET | /tasks | Get All Tasks |
| GET | /tasks/:id | Get Task by ID |
| POST | /tasks | Create Task |
| PUT | /tasks/:id | Update Task |
| DELETE | /tasks/:id | Delete Task |

## Example cURL

```bash
curl -i http://localhost:3000/tasks
```

Example Response:

```json
[
  {
    "id": 1,
    "title": "Learn Express",
    "done": false
  },
  {
    "id": 2,
    "title": "Build CRUD API",
    "done": false
  }
]
```

## Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK |
| 201 | Created |
| 204 | No Content |
| 400 | Bad Request |
| 404 | Not Found |

## Swagger Screenshot

Add a screenshot of your Swagger UI here after uploading it to the repository.

Example:

```
docs/swagger.png
```

Then display it using:

```md
![Swagger UI](docs/swagger.png)
```

## Project Structure

```
be-02-crud-api
│── server.js
│── package.json
│── package-lock.json
│── openapi.json
│── README.md
│── .gitignore
```

## Author

Amna

Backend AI Engineering Internship – Week 2 Assignment
