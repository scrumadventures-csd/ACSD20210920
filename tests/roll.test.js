const app = require("../server");
const supertest = require("supertest");
const { getRoll } = require("../functions/roll");

//rolling
test("getRoll(0024-1632439560400)", async () => {
  let pins = await getRoll("0024-1632439560400");
  console.log(pins);
  expect(typeof pins === "object").toBe(true);
});
test("GET /api/mbc/roll?id", async () => {
  await supertest(app)
    .get("/api/mbc/roll?id=0024-1632439560400")
    .expect(200)
    .then((response) => {
      // Check type and length
      expect(typeof response.body.pins === "object").toBe(true);
    });
});
