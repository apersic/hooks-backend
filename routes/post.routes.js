const express = require("express");
const router = express.Router();

// middleware
router.use("/post/:id", (req, res, next) => {
  next();
});

router.get("/", (req, res) => {
  res.send("Get posts");
});

router.get("/:id", (req, res) => {
  res.send(`Get post ${req.params.id}`);
});

router.post("/", (req, res) => {
  res.send("Create post");
});

router.put("/:id", (req, res) => {
  res.send(`Edit post ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`Delete post ${req.params.id}`);
});

module.exports = router;
