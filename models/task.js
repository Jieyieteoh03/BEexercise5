const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  dueDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Completed", "Overdue"],
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
  },
  tasks: { type: Schema.Types.ObjectId, ref: "Category" },
});

const Task = model("Task", taskSchema);
module.exports = Task;