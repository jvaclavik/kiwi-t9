const express = require("express")
const charactersMap = require("../utils/charactersMap")
const getCartesianProduct = require("../utils/cartesianProduct")

var router = express.Router()

const validationRegexPattern = "^[23456789]{1,11}$"

const isInputValid = input => new RegExp(validationRegexPattern).test(input)

const mapInputToCharacters = input =>
  input.split("").map(number => charactersMap[number])

const getCombinations = input => {
  const charactersArray = mapInputToCharacters(input)
  return getCartesianProduct(...charactersArray)
}

router.get("/", (req, res, next) => {
  const input = req.query.input
  res.set("Content-Type", "application/json")
  if (!input || input.length < 1) {
    const body = {
      errors: [`No input`],
    }
    res.status(400).json(body)
  } else {
    if (isInputValid(input)) {
      res.status(200).json(getCombinations(input))
    } else {
      const body = {
        errors: [`Bad input. Allowed pattern is: ${validationRegexPattern}`],
      }
      res.status(400).json(body)
    }
  }
})

module.exports = router
