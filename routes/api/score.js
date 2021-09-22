const express = require("express");
const router = express.Router();
const { getPins } = require("../../functions/scoring");

//@route    GET api/score
//@desc     GET pins for one ball
//@access   Private
router.get("/", async (req, res) => {
  try {
    let pins = getPins(req.query.ball);

    res.json({ pins });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
