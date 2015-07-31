var React = require("react");
var DemoDairy = require("./components/DemoDairy.react");
var dairyGroup = React.render(
	<DemoDairy />,
	document.getElementById("example")
);


$(function(){
	$(window).scroll(function(){
	  var innerHeight = parseInt(window.innerHeight);
	      var scrollHeight = parseInt(document.documentElement.scrollHeight);
	      var scrollTop = $(this).scrollTop();
	      
	      if( (scrollHeight > innerHeight && innerHeight+scrollTop) >= scrollHeight){
	      dairyGroup.handleAdd();
	  }
	});
});