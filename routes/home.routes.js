const express = require("express");
const router = express.Router();

// middleware
router.use("/:id", (req, res, next) => {
  next();
});

router.get("/:id", (req, res) => {
  res.send(`Get home for user ${req.params.id}`);
});

module.exports = router;
