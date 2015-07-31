var React = require("react");
var DairyForm = require("./DairyForm.react");
var DairyList = require("./DairyList.react");
var DairyStore = require("../stores/DairyStore");



var DemoDairy = React.createClass({

	getInitialState: function(){
		return{
			data: DairyStore.getDairys()
		};
	},
	componentDidMount: function() {
    	DairyStore.addChangeListener(this._onChange);
	},
	componentWillMount:function(){
        initData = [];
        this.setState({data:initData});
    },
    handleAdd:function(){
    	DairyStore.addOldData();
    	this.setState({data:DairyStore.getDairys()});
    },
	render:function(){
		var display = "block";
	  	if(this.state.data.length==0){
	  		display = "none";
	  	}
		return(
			<div> 
                <DairyForm onDairySubmit={this.handleDairySubmit} />
                <section id="cd-timeline" className="cd-container" style={{'display':display}}>
                  <DairyList data={this.state.data}  />
                </section>
             </div>
		);
	},

	_onChange: function() {
	    this.setState({data:DairyStore.getDairys()});
	}

});

module.exports = DemoDairy;