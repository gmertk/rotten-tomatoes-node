var request = require('superagent'),
	endpoints = require("./endpoints.json");

function RottenAPI(apiKey, baseUrl) {
	this.baseUrl = baseUrl || endpoints.baseUrl;
	this.apiKey = apiKey;

	return this;
}

var methods = endpoints.methods;
Object.keys(methods).forEach(function(method){
	Object.keys(methods[method]).forEach(function(obj){
		var methodName = method + capitalizeFirstLetter(obj);
		RottenAPI.prototype[methodName] = function(params, fn) {
			if (typeof params == "function") {
				fn = params;
				params = {};
			}
			var endpoint = methods[method][obj];
			execMethod.call(this, endpoint.type, params, endpoint.resource, fn);

			return this;
		};
	});
});

function execMethod(type, params, endpoint, fn){
	params = params || {};
	type = type.toUpperCase();
	endpoint = endpoint.replace(":id", params.id);

	var req = request(type, this.baseUrl + endpoint)
				.query({apiKey : this.apiKey});

	if (type === "GET") {
		req.query(params);
	}
	else {
		req.send(params);
	}

	req.end(function(err, res) {
		var body = toJSON(res.text);
		var result = body ? body: undefined;
		return fn(err, result);
	});
}

function capitalizeFirstLetter(str){
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function toJSON(str) {
  var result;
  try {
    result = JSON.parse(str);
  } catch (err) {}
  return result;
}

module.exports = function(apiKey, baseUrl) {
  if (apiKey) return new RottenAPI(apiKey, baseUrl);
  else throw new Error('An api key is required.');
};
