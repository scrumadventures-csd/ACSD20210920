const express = require("express");
const router = express.Router();
const { registerGame } = require("../../../functions/register");

//@route    GET api/mbc/register
//@desc     GET pins for one ball
//@access   Private
router.get("/register", async (req, res) => {
  try {
    let id = await registerGame();

    res.json({ id });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
