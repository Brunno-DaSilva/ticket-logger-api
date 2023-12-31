const express = require("express");
const router = express.Router();
const Ticket = require("../models/Ticket");

// 1. Get All Tickets
router.get("/", async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// 2. Get One Ticket by ID
router.get("/:id", async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// 3. Create a New Ticket
router.post("/", async (req, res) => {
  try {
    const newTicket = new Ticket(req.body);
    await newTicket.save();
    res.json(newTicket);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// 4. Update One Ticket by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedTicket = await Ticket.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTicket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    res.json(updatedTicket);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// 5. Delete One Ticket by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedTicket = await Ticket.findByIdAndRemove(req.params.id);
    if (!deletedTicket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    res.json({ message: "Ticket deleted" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
