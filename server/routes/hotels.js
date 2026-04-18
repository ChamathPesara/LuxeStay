const express = require("express");
const router = express.Router();
const Hotel = require("../models/Hotel");

const { verifyToken, verifyAdmin } = require("../middleware/auth");

// Create hotel
router.post("/", verifyToken, verifyAdmin, async (req, res) => {
  try {
    const newHotel = new Hotel(req.body);
    await newHotel.save();
    res.status(201).json(newHotel);
  } catch (err) {
    console.error(err);
    res.status(500).json("Something went wrong");
  }
});

//Get all hotels
router.get("/",async(req,res)=>{
    try {
        const hotels = await Hotel.find();
        res.json(hotels);
    } catch (err) {
        console.error(err);   // ✅ shows real error in terminal
        res.status(500).json("Something went wrong");
}
});

// ✅ GET SINGLE HOTEL
router.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.json(hotel);
  } catch (err) {
        console.error(err);   // ✅ shows real error in terminal
        res.status(500).json("Something went wrong");
}
});

module.exports = router;