const app = require("../server");
const supertest = require("supertest");

// beforeEach((done) => {
//   mongoose.connect("mongodb://localhost:27017/JestDB",
//     { useNewUrlParser: true, useUnifiedTopology: true },
//     () => done());
// });

// afterEach((done) => {
//   mongoose.connection.db.dropDatabase(() => {
//     mongoose.connection.close(() => done())
//   });
// });

test("GET /api/score?ball1=2", async () => {
  await supertest(app)
    .get("/api/score?ball1=2")
    .expect(200)
    .then((response) => {
      // Check type and length
      expect(response.body.score).toEqual("2");
    });
});
