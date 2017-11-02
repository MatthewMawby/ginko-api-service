"use strict";

const Promise = require("bluebird")

const userModule = require("./user")
const personModule = require("./person")
const relationModule = require("./relation")
const pictureModule = require("./picture")

module.exports = (function(){

  var domain = "http://localhost:1337";

  function setDomain(domain){
    domain = domain;
  }

  function getPerson(params){
    return personModule.getPerson(domain, params)
  }

  return {
    setDomain: setDomain,
    getPerson: getPerson
  }
})();
