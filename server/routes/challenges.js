const express = require('express');
const router = express.Router();
const { validateFlag, getErrorMessage } = require('../utils/validators');
const path = require('path');
const fs = require('fs');

router.get('/hints/:level', (req, res) => {
    const { level } = req.params;
    try {
        const hintsPath = path.join(__dirname, `../challenges/${level}/indices.json`);
        const hints = JSON.parse(fs.readFileSync(hintsPath, 'utf8'));
        res.json(hints);
    } catch (error) {
        res.json({ error: "No hints available bestie" });
    }
});

router.post('/verify/:level', (req, res) => {
    const { level } = req.params;
    const { flag } = req.body;

    if (validateFlag(level, flag)) {
        res.json({
            success: true,
            message: "W rizz + based",
            nextLevel: level === 'final' ? null : `level${parseInt(level.slice(-1)) + 1}`
        });
    } else {
        res.json({
            success: false,
            message: getErrorMessage(level)
        });
    }
});

module.exports = router; 