/*
 * GET users listing.
 */

exports.userList = function(req, res) {
	var mockUserList = {
		"userName" : "13291801306",
		"password" : "123456"
	};

	var strList = JSON.stringify(mockUserList);
	res.send(strList);
};