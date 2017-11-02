"use strict"

const Promise = require("bluebird")
require("isomorphic-fetch")
const errorLog = require("./errorlog")

function getPerson(domain, Id) {
  var route = domain + "/person/" + Id
  return fetch(route, {
    method: "GET"
  }).then((res) => {
    return res.json()
  }).catch(errorLog(route))
}

module.exports.getPerson = getPerson
