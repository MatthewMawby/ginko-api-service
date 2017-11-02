"use strict"

const Promise = require("bluebird")
require("isomorphic-fetch")

const utils = require("./utils")

// GET method for relation API
function getRelation(domain, params) {
  var route = domain + "/relation" + utils.queryString(params)
  return utils.getReq(route)
}

module.exports.getRelation = getRelation
