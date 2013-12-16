var rottenAPI = require("./lib/rotten")('j6ahmr555pen2ybkb7nsxbb9');
var util = require("util");

rottenAPI.movieSearch({q:"toy story 3", page_limit:1}, function(err,res){
	if (err) console.log(err);
	console.log(util.inspect(res));
});

// rottenAPI.movieGet({id:"770672122"}, function(err,res){
// 	if (err) console.log(err);
// 	console.log(util.inspect(res));
// });

// rottenAPI.movieReviews({id:"770672122", review_type:"top_critic", page_limit:5}, function(err,res){
// 	if (err) console.log(err);
// 	console.log(util.inspect(res));
// });

// rottenAPI.movieClips({id:"770672122"}, function(err,res){
// 	if (err) console.log(err);
// 	console.log(util.inspect(res));
// });

// rottenAPI.listMoviesBoxOffice(function(err,res){
// 	if (err) console.log(err);
// 	console.log(util.inspect(res));
// });

// rottenAPI.listMoviesInTheaters(function(err,res){
// 	if (err) console.log(err);
// 	console.log(util.inspect(res));
// });

// rottenAPI.listMoviesOpening(function(err,res){
// 	if (err) console.log(err);
// 	console.log(util.inspect(res));
// });

// rottenAPI.listMoviesUpcoming(function(err,res){
// 	if (err) console.log(err);
// 	console.log(util.inspect(res));
// });

// rottenAPI.listDvdsTopRentals(function(err,res){
// 	if (err) console.log(err);
// 	console.log(util.inspect(res));
// });

// rottenAPI.listDvdsCurrentReleases(function(err,res){
// 	if (err) console.log(err);
// 	console.log(util.inspect(res));
// });

// rottenAPI.listDvdsNewReleases(function(err,res){
// 	if (err) console.log(err);
// 	console.log(util.inspect(res));
// });

// rottenAPI.listDvdsUpcoming(function(err,res){
// 	if (err) console.log(err);
// 	console.log(util.inspect(res));
// });




