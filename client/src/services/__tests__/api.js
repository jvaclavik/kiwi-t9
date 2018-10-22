// @flow
import fetch from "isomorphic-fetch"
import api from "../api"

const mockInput = "23"
const mockWords = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

describe("Words", () => {
  it("get proper data from API", () =>
    api
      .getWords(mockInput)
      .then(response => response.json())
      .then(data => {
        expect(data).toBeDefined()
        expect(data).toEqual(mockWords)
      }))
})
