import express from "express";
import Team from "../models/team.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const teams = await Team.find().populate("users");
    res.json(teams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const teamId = req.params.id;
    const team = await Team.findById(teamId).populate("users");
    if (!team) {
      return res.status(404).json({ message: "No team found with this ID" });
    }
    res.json(team);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
export default router;
