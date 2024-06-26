import express from "express";
import getAllUsers from "./routes/user.js";
import getById from "./routes/getById.js";
import createUser from "./routes/createUser.js";
import updateUser from "./routes/updateUser.js";
import deleteUser from "./routes/deleteUser.js";
import createTeam from "./routes/createTeam.js";
import getTeam from "./routes/getTeam.js";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors());

app.use("/api/users", getAllUsers);
app.use("/api/users/", getById);
app.use("/api/users", createUser);
app.use("/api/users/", updateUser);
app.use("/api/users/", deleteUser);
app.use("/api/team/", createTeam);
app.use("/api/team/", getTeam);

export { app };
