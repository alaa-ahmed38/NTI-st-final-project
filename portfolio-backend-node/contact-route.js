const express = require("express");
const router = express.Router();
const ContactMessage = require('./contact-schema'); 

router.post("/", async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: "Please provide all required fields." });
        }

        const newMessage = new ContactMessage({
            name: name,
            email: email,
            subject: subject,
            message: message
        });

        const savedMessage = await newMessage.save();
        res.status(201).json({ success: true, data: savedMessage });

    } catch (error) {
        console.error("Error saving message:", error);
        res.status(500).json({ success: false, error: "Server error, could not save message." });
    }
});


module.exports = router;