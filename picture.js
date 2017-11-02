"use strict"

const Promise = require("bluebird")
require("isomorphic-fetch")

const utils = require("./utils")

// GET method for picture API
function getPicture(domain, params) {
  var route = domain + "/picture" + utils.queryString(params)
  return utils.getReq(route)
}

module.exports.getPicture = getPicture
