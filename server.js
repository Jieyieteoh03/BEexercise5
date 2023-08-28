const express = require("express");
const mongoose = require("mongoose");

const app = express();

//setup a middleware
app.use(express.json());

//mongodb connection
mongoose
  .connect("mongodb://127.0.0.1:27017/taskscheduler")
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

// routes
const categoryRouter = require("./routes/category");
const taskRouter = require("./routes/task");

app.use("/category", categoryRouter);
app.use("/task", taskRouter);

app.get("/", (req, res) => {
  res.send("<a href='/task'>Tasks</a><a href='/category'>Categories</a>");
});

app.listen(5000, () => {
  console.log(`Server running on http://localhost:5000`);
});
