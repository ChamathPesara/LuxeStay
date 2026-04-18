const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const { verifyToken } = require("../middleware/auth");


// ✅ CREATE BOOKING
router.post("/", verifyToken, async (req, res) => {
  try {
    const { roomId, checkIn, checkOut } = req.body;

    // Check if room already booked in selected dates
    const existingBooking = await Booking.findOne({
      roomId,
      checkIn: { $lt: new Date(checkOut) },
      checkOut: { $gt: new Date(checkIn) }
    });

    if (existingBooking) {
      return res.status(400).json("Room is already booked for these dates");
    }

    const newBooking = new Booking({
      roomId,
      checkIn,
      checkOut,
      userId: req.user.id
    });

    await newBooking.save();
    res.status(201).json(newBooking);

  } catch (err) {
    console.error(err);
    res.status(500).json("Booking failed");
  }
});


// ✅ GET USER BOOKINGS
router.get("/", verifyToken, async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id })
      .populate({
        path: "roomId",
        populate: {
          path: "hotelId"
        }
      });

    res.json(bookings);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json("Booking not found");
    }

    // make sure user owns booking
    if (booking.userId.toString() !== req.user.id) {
      return res.status(403).json("Not allowed");
    }

    await Booking.findByIdAndDelete(req.params.id);

    res.json("Booking cancelled successfully");
  } catch (err) {
    console.error(err);
    res.status(500).json("Failed to cancel booking");
  }
});

module.exports = router;