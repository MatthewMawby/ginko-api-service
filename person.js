"use strict"

const Promise = require("bluebird")
require("isomorphic-fetch")

const utils = require("./utils")

// GET method for person API
function getPerson(domain, params) {
  var route = domain + "/person" + utils.queryString(params)
  return utils.getReq(route)
}

module.exports.getPerson = getPerson
