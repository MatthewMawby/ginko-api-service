"use strict"

const Promise = require("bluebird")
require("isomorphic-fetch")

const utils = require("./utils")

// GET method for person API
function getPerson(domain, params) {
  var route = domain + "/person?" + utils.queryString(params)
  return fetch(route, {
    method: "GET"
  }).then((res) => {
    return res.json()
  }).catch(utils.errorLog(route))
}

module.exports.getPerson = getPerson
