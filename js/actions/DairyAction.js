var DairyDispatcher = require("../dispatcher/DairyDispatcher");
var DairyAction = {
	onDairySubmit:function(dairy){
		DairyDispatcher.dispatch({
			actionType:"addDairy",
			dairy:dairy
		});
	}
};

module.exports = DairyAction;