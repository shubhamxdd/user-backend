import express from "express";
import Team from "../models/team.model.js";
import User from "../models/user.model.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const userIds = req.body;
    const users = await User.find({ _id: { $in: userIds } });
    if (users.length !== userIds.length) {
      return res.status(400).json({ message: "Some user IDs are invalid" });
    }
    const team = await Team.create({ users: userIds });
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
