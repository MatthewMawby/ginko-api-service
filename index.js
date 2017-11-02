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

  function getUser(params){
    return userModule.getUser(domain, params)
  }

  function getPicture(params){
    return pictureModule.getPicture(domain, params)
  }

  function getRelation(params) {
    return relationModule.getRelation(domain, params)
  }

  return {
    setDomain: setDomain,
    getPerson: getPerson,
    getUser: getUser,
    getPicture: getPicture,
    getRelation: getRelation
  }
})();
