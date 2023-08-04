import express from "express";
import { authenticateJwt, SECRET } from "../middleware";
import { Todo } from "../db";
const router = express.Router();
import { z } from "zod";

let titleInputProps = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

router.post("/todos", authenticateJwt, (req, res) => {
  const parsedInput = titleInputProps.safeParse(req.body);
  if (!parsedInput.success) {
    return res.status(400).json({
      msg: parsedInput.error,
    });
  }
  const done = false;
  const userId = req.headers.userId;

  let title = parsedInput.data.title;
  let description = parsedInput.data.description;

  const newTodo = new Todo({
    title: title,
    description: description,
    done,
    userId,
  });

  newTodo
    .save()
    .then((savedTodo) => {
      res.status(201).json(savedTodo);
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to create a new todo" });
    });
});

router.get("/todos", authenticateJwt, (req, res) => {
  const userId = req.headers.userId;

  Todo.find({ userId })
    .then((todos) => {
      res.json(todos);
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to retrieve todos" });
    });
});

router.patch("/todos/:todoId/done", authenticateJwt, (req, res) => {
  const { todoId } = req.params;
  const userId = req.headers.userId;

  Todo.findOneAndUpdate({ _id: todoId, userId }, { done: true }, { new: true })
    .then((updatedTodo) => {
      if (!updatedTodo) {
        return res.status(404).json({ error: "Todo not found" });
      }
      res.json(updatedTodo);
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to update todo" });
    });
});

export default router;
