const app = require("../server");
const supertest = require("supertest");
const { getPins } = require("../functions/scoring");

test("getPins for ball 1", () => {
  expect(getPins("1")).toBe("2");
});
test("GET /api/score?ball=1", async () => {
  await supertest(app)
    .get("/api/score?ball=1")
    .expect(200)
    .then((response) => {
      // Check type and length
      expect(response.body.pins).toEqual("2");
    });
});
