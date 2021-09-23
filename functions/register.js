const axios = require("axios");

const registerGame = async () => {
  //call pinsetter
  const res = await axios.get(
    "http://pinsetter.herokuapp.com/pinsetter/?action=register&frames=10&pins=10&rolls=2"
  );
  return res.data;
};

module.exports = {
  registerGame,
};
