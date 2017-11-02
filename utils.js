// Used for error logging in fetch requests
function errorLog(apiPath){
  return function(err){
    console.error("ERROR", apiPath, err)
    throw new Error(err)
  };
}

function queryString(params){
  var qstring = Object.keys(params).map(key => {
    return (encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
  }).join('&')
  return qstring
}

module.exports.errorLog = errorLog
module.exports.queryString = queryString
