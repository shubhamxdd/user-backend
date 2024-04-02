import express from "express";
import User from "../models/user.model.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findOne({ id: userId });
    if (!user)
      return res
        .status(404)
        .json({ message: "No user found with matching id" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
