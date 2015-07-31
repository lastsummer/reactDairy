//var React = require("react");
var React = require("react/addons");
var DairyImg = require("./DairyImg.react");
var DairyContent = require("./DairyContent.react");

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var DairyList = React.createClass({
	render: function(){

	  console.log("length=="+this.props.data.length);
	  var diaryNodes = this.props.data.map(function (diary){
	  	var display = "cd-timeline-block";
	  	if(diary.title=="temp"){
	  		display = "cd-timeline-block temp";
	  	}

	    return (
	      <div className={display} key={diary.id} >
	          <DairyImg dairyType={diary.dairyType} />
	          <DairyContent title={diary.title} content={diary.content} dairyDate={diary.dairyDate} />
	      </div>
	    );
	  }.bind(this));
	  return(
	    <div className="dairyList">
	        <ReactCSSTransitionGroup transitionName="example">  
	          {diaryNodes}  
	        </ReactCSSTransitionGroup>
	    </div>
	  );
	}
});

module.exports = DairyList;