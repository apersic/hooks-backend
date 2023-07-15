const express = require("express");
const router = express.Router();

// middleware
router.use("/user/:id", (req, res, next) => {
  next();
});

router.get("/", (req, res) => {
  res.send(`Get users`);
});

router.get("/:id", (req, res) => {
  res.send(`Get user ${req.params.id}`);
});

router.post("/", (req, res) => {
  res.send("Create user");
});

router.put("/:id", (req, res) => {
  res.send(`Edit user ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`Delete user ${req.params.id}`);
});

module.exports = router;
