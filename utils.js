// Used for error logging in fetch requests
function errorLog(apiPath){
  return function(err){
    console.error("ERROR", apiPath, err)
    throw new Error(err)
  };
}

function queryString(params){
  // no query string
  if (!params) {
    return ""
  }
  // ?key=value&key2=value2...
  var qstring = Object.keys(params).map(key => {
    return (encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
  }).join('&')
  return "?" + qstring
}

function getReq(route) {
  return fetch(route, {
    method: "GET"
  }).then((res) => {
    return res.json()
  }).catch(errorLog(route))
}

module.exports.errorLog = errorLog
module.exports.queryString = queryString
module.exports.getReq = getReq
