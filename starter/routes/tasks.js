const express = require("express");
const {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");
const router = express.Router();

router.route("/").get(getAllTask).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
