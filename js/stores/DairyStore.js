var DairyDispatcher = require('../dispatcher/DairyDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require("object-assign");

var CHANGE_EVENT = 'change';

var _dairys = [];
var _newDairyCount = 0;
var _oldDairyCount = 0;
var _tmpAdd = false;

function addDairy(dairy){

	//var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);


	//var newDairys; = [dairy].concat(_dairys);

	//Step1.新增key
	
	
	//Step2.新增日期
	var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];
	var date = new Date();
	var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var hour = date.getHours();

    var newDate = year+"/"+monthNames[date.getMonth()]+"/"+day+" "+hour+":"+date.getMinutes();

    dairy.dairyDate = newDate;

    console.log("_tmpAdd="+_tmpAdd);

	//Step3.如果是增加雙數則再增加一筆tmp
	if(!_tmpAdd){

		console.log("新增雙數筆或是新增第一筆");

		_newDairyCount++;
		dairy.id = _newDairyCount;
    	_dairys =  [dairy].concat(_dairys);

    	if(_newDairyCount>1){
    		_newDairyCount++;
			_dairys =  [{id:_newDairyCount,title:"temp"}].concat(_dairys);
			_tmpAdd = true;
    	}
	}else{

		_tmpAdd = false;

		console.log("新增單數筆");
	    _dairys.splice(0, 1 );

	    _newDairyCount++;
	    dairy.id = _newDairyCount;
	    _dairys =  [dairy].concat(_dairys);
	}


	
	//console.log("addDairy dairy="+dairy.title);
}

function addOldDairy(){
	var initArray = [];
    initArray.push(
      {dairyType:"picture"
       ,title:"Title of section 1"
       ,content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut."
      });
    initArray.push(
      {dairyType:"movie"
       ,title:"Title of section 2"
       ,content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?"
      });
    initArray.push(
      {dairyType:"picture"
       ,title:"Title of section 3"
       ,content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum quis. Odit, itaque, deserunt corporis vero ipsum nisi eius odio natus ullam provident pariatur temporibus quia eos repellat consequuntur perferendis enim amet quae quasi repudiandae sed quod veniam dolore possimus rem voluptatum eveniet eligendi quis fugiat aliquam sunt similique aut adipisci."
      });
    initArray.push(
      {dairyType:"location"
       ,title:"Title of section 4"
       ,content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut."
      }
    );
    
    
    var tmpData = [];
    for(var i = 0 ; i<initArray.length ; i++){
      if(_oldDairyCount%4==i){
        tmpData.push(initArray[i]);
      }
      
    }
    _oldDairyCount++;
    
    _dairys =  _dairys.concat(tmpData);
    
}

var DairyStore = assign({},EventEmitter.prototype,{
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on(CHANGE_EVENT,callback)
	},
	getDairys: function() {

		//console.log("dairys length="+_dairys.length);

	    return _dairys;
	},
	addOldData: function() {
		addOldDairy();
	}
});


DairyDispatcher.register(function(actions){
	switch(actions.actionType){
		case "addDairy":
		var dairy = actions.dairy;
		addDairy(dairy);
		DairyStore.emitChange();

	}

});


module.exports = DairyStore;
