const router = require("express").Router();
const { protect } = require("../middleware/authMiddleware");

router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});

module.exports = router;
