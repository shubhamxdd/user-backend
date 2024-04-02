import express from "express";
import User from "../models/user.model.js";

const router = express.Router();

router.put("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = await User.findOneAndUpdate({ id: userId }, req.body, {
      new: true,
    });
    if (!updatedUser)
      return res
        .status(404)
        .json({ message: "No user found with matching id" });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
