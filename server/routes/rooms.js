const express = require("express");
const router = express.Router();
const Room = require("../models/Room");
const { verifyToken, verifyAdmin } = require("../middleware/auth");


// ✅ CREATE ROOM (Admin only)
router.post("/", verifyToken, verifyAdmin, async (req, res) => {
  try {
    const newRoom = new Room(req.body);
    await newRoom.save();
    res.status(201).json(newRoom);
  } catch (err) {
    console.error(err);
    res.status(500).json("Error creating room");
  }
});


// ✅ GET ROOMS BY HOTEL
router.get("/hotel/:hotelId", async (req, res) => {
  try {
    const rooms = await Room.find({ hotelId: req.params.hotelId });
    res.json(rooms);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;