// Credit to ChatGPT for assistance and code comments.
const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Sample users object to simulate a database
const users = {
  1: { id: 1, name: "Alice", email: "alice@example.com" },
  2: { id: 2, name: "Bob", email: "bob@example.com" },
  3: { id: 3, name: "Charlie", email: "charlie@example.com" },
};

// GET /
app.get("/", (req, res) => {
  res.send("Welcome to the Express server!");
});

// GET /about
app.get("/about", (req, res) => {
  res.json({ message: "This is the about page." });
});

// POST /contact
app.post("/contact", (req, res) => {
  const { name, email } = req.body;
  res.json({ name, email });
});

// GET /user/:id
app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  const user = users[id];
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// GET /search
app.get("/search", (req, res) => {
  const { term, sort } = req.query;
  res.json({ term, sort });
});

// Catch-all route for undefined routes
app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
