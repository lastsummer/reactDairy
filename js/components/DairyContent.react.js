var React = require("react");

var DairyContent = React.createClass({
	 render:function(){
	   //var test = (function(){return }.bind(this))() ;
	   return(
	      <div className="cd-timeline-content bounce-in">
	    				  <h2>{this.props.title}</h2>
	    				<p>{this.props.content}</p>
	    				<a href="#0" className="cd-read-more">Read more</a>
	    				<span className="cd-date">{this.props.dairyDate}</span>
	      </div>
	    );
	 }   
});



module.exports = DairyContent;