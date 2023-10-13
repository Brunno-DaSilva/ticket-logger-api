const express = require("express");
const router = express.Router();
const Ticket = require("../models/ticket.js");

// Get All

router.get("/", async (req, res) => {
  const ticket = new Ticket({
    subject: req.body.subject,
    description: req.body.description,
    progress: req.body.progress,
    category: req.body.category,
    createdDate: req.body.createdDate,
    closedDate: req.body.closedDate,
  });
  try {
    const newTicket = await ticket.save();
    res.status(201).json(newTicket);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get one

router.get("/:id", (req, res) => {});

// creating one

router.post("/tickets", (req, res) => {});

// Updating one
router.patch("/:id", (req, res) => {});

// deleing one
router.delete("/:id", (req, res) => {});

module.exports = router;
