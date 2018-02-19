//require
const friends = require("../data/friends");

//routing
module.exports = function(app) {

	//get request for api
	app.get("/api/friends", function(req, res) {
	    res.json(friends);
	});

	//post request for new info to api
	app.post("/api/friends", function(req, res) {
	    friends.push(req.body);
	    console.log('new person added');
	});
};