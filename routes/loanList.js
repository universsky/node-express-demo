/**
 * loanList.js file POST loan List
 */

exports.loanList = function(req, res) {
	var mockLoanList = {
		"code" : "0",
		"data" : [ {
			"applyCode" : "201505051025051",
			"category" : "1",
			"cityCode" : "3301",
			"contractAmount" : 1000.00,
			"gmtCreated" : "2015-05-05 10:25:05",
			"gmtModified" : "2015-05-05 10:25:05",
			"gmtStatusModified" : "2015-05-05 10:25:05",
			"id" : 1,
			"isDeleted" : "0",
			"loanAmount" : 500.00,
			"loanLimit" : 6,
			"memberId" : "201504140100010003D1Y90000000003",
			"partner" : "光剑电梯系统公司",
			"projectName" : "光剑牛逼测试项目",
			"propertyDeveloper" : "光剑牛逼开发商",
			"provinceCode" : "33",
			"status" : "0"
		}, {
			"applyCode" : "201505051040322",
			"category" : "3",
			"cityCode" : "3301",
			"contractAmount" : 1111.00,
			"gmtCreated" : "2015-05-05 10:40:32",
			"gmtModified" : "2015-05-05 10:40:32",
			"gmtStatusModified" : "2015-05-05 10:40:32",
			"id" : 2,
			"isDeleted" : "0",
			"loanAmount" : 11.00,
			"loanLimit" : 2,
			"memberId" : "201504140100010003D1Y90000000003",
			"partner" : "光剑厨房一号有限公司",
			"projectName" : "姜广财的测试",
			"propertyDeveloper" : "姜广财大大",
			"provinceCode" : "33",
			"status" : "0"
		}, {
			"applyCode" : "201505051043213",
			"category" : "1",
			"cityCode" : "3301",
			"contractAmount" : 1000.00,
			"gmtCreated" : "2015-05-05 10:43:21",
			"gmtModified" : "2015-05-05 16:35:13",
			"gmtStatusModified" : "2015-05-05 10:43:21",
			"id" : 3,
			"isDeleted" : "0",
			"loanAmount" : 11.00,
			"loanLimit" : 2,
			"memberId" : "201504140100010003D1Y90000000003",
			"partner" : "光剑电梯系统公司",
			"projectName" : "姜广财项目",
			"propertyDeveloper" : "姜广财大大大",
			"provinceCode" : "33",
			"status" : "5"
		} ],
		"message" : "成功"
	};

	var strList = JSON.stringify(mockLoanList);
	res.send(strList);
};
