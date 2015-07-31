var React = require("react");


var DairyImg = React.createClass({
	 render:function(){
	   
	   var img = "images/cd-icon-picture.svg";
	   var imgClass = "cd-picture";
	   //console.log("arrow==="+this.props.arrow);
	   
	   if(this.props.dairyType=="movie"){
	     img = "images/cd-icon-movie.svg";
	     imgClass = "cd-movie";
	   }else if(this.props.dairyType=="location"){
	     img = "images/cd-icon-location.svg";
	     imgClass = "cd-location";
	   }
	   
	   imgClass = "cd-timeline-img " + imgClass;
	   return(
	      	<div className={imgClass}>
				<img src={img} alt="Picture"/>
			</div>
	    );
	 }   
});

module.exports = DairyImg;