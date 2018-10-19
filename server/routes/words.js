const express = require("express")
const charactersMap = require("../utils/charactersMap")
const getCartesianProduct = require("../utils/cartesianProduct")

var router = express.Router()

const mapInputToCharacters = input =>
  input.split("").map(number => charactersMap[number])

const getCombinations = input => {
  const charactersArray = mapInputToCharacters(input)
  return getCartesianProduct(...charactersArray)
}

router.get("/", (req, res, next) => {
  const input = req.query.input
  res.set('Content-Type', 'application/json'); 
  res.status(200).json(getCombinations(input))
})

module.exports = router
