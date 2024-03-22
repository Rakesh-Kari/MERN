const express = require("express");
const jwt = require("jsonwebtoken");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./database");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  console.log(createPayload);
  console.log(parsedPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      message: "you have sent the wrong inputs",
    });
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({
    message: "Todo has been created",
  });
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.json({ todos });
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      message: "You have sent the wrong inputs",
    });
    return;
  }
  await todo.updateOne(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(4000, () => {
  console.log("Server is working");
});
