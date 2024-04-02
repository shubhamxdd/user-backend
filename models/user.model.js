import Mongoose from "mongoose";

const userSchema = new Mongoose.Schema({
  id: { type: Number, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gender: {
    type: String,
    enum: ["Male", "Female", "Agender", "Bigender"],
    required: true,
  },
  avatar: { type: String, required: true },
  domain: { type: String, required: true },
  available: { type: Boolean, required: true },
});

const User = Mongoose.model("User", userSchema);

export default User;
