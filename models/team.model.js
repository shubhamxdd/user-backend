import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Team = mongoose.model("Team", teamSchema);

export default Team;
