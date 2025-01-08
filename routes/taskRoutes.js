// routes/taskRoutes.js
const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  getAlltitleBystatus,
  addTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

// Route definitions
router.get("/tasks", getAllTasks);
router.get("/tasks/:status", getAlltitleBystatus);
router.post("/tasks", addTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

module.exports = router;