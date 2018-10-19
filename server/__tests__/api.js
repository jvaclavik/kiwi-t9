const request = require("supertest")

const app = require("../app")

const correctResult = [
  "ad",
  "ae",
  "af",
  "bd",
  "be",
  "bf",
  "cd",
  "ce",
  "cf"
]

describe("GET /words", function() {
  it("respond with json containing a list of words", function(done) {
    request(app)
      .get("/words/?input=23")
      .set("Accept", "application/json")
      .expect(200)
      .expect(correctResult, done);
  })
})
