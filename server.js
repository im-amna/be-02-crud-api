const express = require("express");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./openapi.json");
const app = express();
const PORT = 3000;

// Parse JSON
app.use(express.json());

// In-memory task list
let tasks = [
  { id: 1, title: "Learn Express", done: false },
  { id: 2, title: "Build CRUD API", done: false },
  { id: 3, title: "Read Swagger Docs", done: true }
];

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    name: "Task API",
    version: "1.0",
    endpoints: ["/tasks"]
  });
});

// Health endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "ok"
  });
});

// Get all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Get task by ID
app.get("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({
      error: `Task ${id} not found`
    });
  }

  res.json(task);
});


// Create a new task
app.post("/tasks", (req, res) => {
  const { title } = req.body;

  // Validation
  if (!title || title.trim() === "") {
    return res.status(400).json({
      error: "Title is required"
    });
  }

  // Create new task
  const newTask = {
    id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
    title: title.trim(),
    done: false
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

// Update a task
app.put("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, done } = req.body;

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({
      error: `Task ${id} not found`
    });
  }

  // Validation
 if (
  (title !== undefined && typeof title !== "string") ||
  (title !== undefined && title.trim() === "") ||
  (title === undefined && done === undefined)
) {
    return res.status(400).json({
      error: "Provide a valid title or done value"
    });
  }

  if (title !== undefined) {
    task.title = title.trim();
  }

 if (done !== undefined) {
  if (typeof done !== "boolean") {
    return res.status(400).json({
      error: "done must be true or false"
    });
  }

  task.done = done;
}

  res.status(200).json(task);
});

// Delete a task
app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: `Task ${id} not found`
    });
  }

  tasks.splice(index, 1);

  res.status(204).send();
});


app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});