const express = require("express");
const router = express.Router();
const { registerGame } = require("../../../functions/register");
const { getRoll } = require("../../../functions/roll");

//@route    GET api/mbc/register
//@desc     register new game
//@access   public
router.get("/register", async (req, res) => {
  try {
    let id = await registerGame();

    res.json({ id });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route    GET api/mbc/roll
//@desc     GET pins for one ball
//@access   public
router.get("/roll", async (req, res) => {
  try {
    let pins = await getRoll(req.query.id);

    res.json({ pins });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
module.exports = router;
