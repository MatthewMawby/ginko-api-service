"use strict"

const Promise = require("bluebird")
require("isomorphic-fetch")

const utils = require("./utils")

// GET method for tag API
function getTag(domain, params) {
  var route = domain + "/tag" + utils.queryString(params)
  return utils.getReq(route)
}

module.exports.getTag = getTag
