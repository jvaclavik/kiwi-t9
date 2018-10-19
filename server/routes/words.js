var express = require("express")
var router = express.Router()

const getCombinations = input => {
  // @TODO
  return input
}

router.get("/", (req, res, next) =>
  res.status(200).json(getCombinations(req.query.input)),
)

module.exports = router
