import express from "express";
import User from "../models/user.model.js";

const router = express.Router();

router.delete("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findOneAndDelete({ id: userId });
    if (!deletedUser)
      return res
        .status(404)
        .json({ message: "No user found with matching id" });
    res.json(deletedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
