// Import required modules
const express = require('express');
const bcrypt = require('bcrypt');
const teacher = require('./../Models/teacherSchema');

// Create a new Express router
const router = express.Router();

// Endpoint to change password
router.put('/teachers/change-password/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { currentPassword, newPassword } = req.body;

        // Find the teacher by ID
        const existingTeacher = await teacher.findById(id);

        // Check if the teacher exists
        if (!existingTeacher) {
            return res.status(404).json({ error: 'Teacher not found' });
        }

        // Verify the current password
        const isPasswordValid = await bcrypt.compare(currentPassword, existingTeacher.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Incorrect current password' });
        }

        // Validate the new password (add your own validation logic here)
        if (newPassword.length < 8) {
            return res.status(400).json({ error: 'New password must be at least 8 characters long' });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update the teacher's password in the database
        existingTeacher.password = hashedPassword;
        await existingTeacher.save();

        // Respond with a success message
        res.json({ message: 'Password changed successfully' });
    } catch (error) {
        console.error('Error changing password:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Export the router
module.exports = router;
