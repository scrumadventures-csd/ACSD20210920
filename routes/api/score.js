const express = require("express");
const router = express.Router();
const { getScore } = require("../../functions/scoring");

//@route    GET api/score
//@desc     GET score for one frame
//@access   Private
router.get("/", async (req, res) => {
  try {
    let score = getScore(req.query.pins);

    res.json({ score });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
