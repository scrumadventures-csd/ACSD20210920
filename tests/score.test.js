const app = require("../server");
const supertest = require("supertest");
const { getScore } = require("../functions/scoring");

test("getScore with 2 pins", () => {
  expect(getScore("2")).toBe("2");
});
test("GET /api/score?pins=2", async () => {
  await supertest(app)
    .get("/api/score?pins=2")
    .expect(200)
    .then((response) => {
      // Check type and length
      expect(response.body.score).toEqual("2");
    });
});
