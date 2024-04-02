import express from "express";
import User from "../models/user.model.js";

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
