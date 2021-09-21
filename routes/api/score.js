const express = require("express");
const router = express.Router();

//@route    GET api/score
//@desc     GET score for one frame
//@access   Private
router.get("/", async (req, res) => {
  try {
    let score = { score: req.query.ball1 };

    res.json(score);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
