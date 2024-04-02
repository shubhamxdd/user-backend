import express from "express";
import User from "../models/user.model.js";

const router = express.Router();

// Get all users with pagination support
router.get("/", async (req, res) => {
  try {
    const {
      page = 1,
      limit = 12,
      domain,
      gender,
      available,
      search,
    } = req.query;
    let query = {};

    if (domain) {
      query.domain =
        domain.charAt(0).toUpperCase() + domain.slice(1).toLowerCase();
    }

    if (gender) {
      query.gender =
        gender.charAt(0).toUpperCase() + gender.slice(1).toLowerCase();
    }

    if (available !== undefined) {
      query.available = available.toLowerCase() === "true";
    }

    if (search) {
      const searchRegex = new RegExp(search, "i");
      query.$or = [{ first_name: searchRegex }, { last_name: searchRegex }];
    }

    const options = {
      skip: (page - 1) * limit,
      limit: parseInt(limit),
    };

    const users = await User.find(query, null, options);
    const totalDocuments = await User.countDocuments(query);
    const totalPages = Math.ceil(totalDocuments / limit);

    res.json({ users, totalPages });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
