const { boolean } = require("zod");

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ramalexx189:Ramalexx123@cluster0.qixdmm4.mongodb.net/todos"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todo", todoSchema);

module.exports = {
  todo,
};
