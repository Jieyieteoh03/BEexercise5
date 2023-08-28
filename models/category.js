const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  //one to many
  tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
});

const Category = model("Category", categorySchema);
module.exports = Category;
