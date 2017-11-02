"use strict"

const Promise = require("bluebird")
require("isomorphic-fetch")

const utils = require("./utils")

// GET method for user API
function getUser(domain, params) {
  var route = domain + "/user" + utils.queryString(params)
  return utils.getReq(route)
}

module.exports.getUser = getUser
