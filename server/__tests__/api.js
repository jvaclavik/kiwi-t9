const request = require("supertest")

const app = require("../app")

const correctResult = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

const wrongInputResult = {
  errors: ["Bad input. Allowed pattern is: ^[23456789]{1,11}$"],
}
const noInputResult = {
  errors: ["No input"],
}

describe("GET /words", function() {
  it("respond with json containing a list of words", function(done) {
    request(app)
      .get("/words/?input=23")
      .set("Accept", "application/json")
      .expect(200)
      .expect(correctResult, done)
  })
})

describe("GET /words", function() {
  it("respond with HTTP status 400 when input contains wrong characters", function(done) {
    request(app)
      .get("/words/?input=231")
      .set("Accept", "application/json")
      .expect(400)
      .expect(wrongInputResult, done)
  })
})

describe("GET /words", function() {
  it("respond with HTTP status 400 when got no input ", function(done) {
    request(app)
      .get("/words/")
      .set("Accept", "application/json")
      .expect(400)
      .expect(noInputResult, done)
  })
})
