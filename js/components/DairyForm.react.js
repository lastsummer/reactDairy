var React = require("react");
var DairyAction = require("../actions/DairyAction");

var DairyForm = React.createClass({
	handleSubmit:function(e){
      e.preventDefault();
      var title = this.refs.title.getDOMNode().value;
      var content = this.refs.content.getDOMNode().value;
      var dairyType = this.refs.dairyType.getDOMNode().value;
	    if(!content || !title || !dairyType ){
	       return;
	    }
      DairyAction.onDairySubmit({title:title,content:content,dairyType:dairyType});
      this.refs.title.getDOMNode().value = "";
      this.refs.content.getDOMNode().value = "";
      return;
  },
	render:function(){
          return(
            <div className="formDiv"> 
              <form className="dairyform" onSubmit={this.handleSubmit}>
                <ul className="main-navigation">
  				        <li className="cd-library">
                    <a href="javascript:void(0)">Title</a>
                  </li>
  				        <li>
  	                <input ref="title" type="title" name="title" placeholder="Title..."/>
                  </li>
  			        </ul>
  			        <ul className="main-navigation">
  				        <li className="cd-library">
                    <a href="javascript:void(0)">Content</a>
                  </li>
  				        <li>
  	                <input ref="content" type="title" name="content" placeholder="Content..."/>
                  </li>
  			        </ul>
  			        <ul className="main-navigation">
  			          <li className="cd-library">
                      <a href="javascript:void(0)">Type</a>
									</li>
									<li>
									  <select ref="dairyType" name="card-expiry-month" id="card-expiry-month">
  										<option value="picture">picture</option>
  										<option value="movie">movie</option>
  										<option value="location">location</option>
  									</select>
									</li>
  			        </ul>
  			        <ul className="main-navigation submit">
  			          <li className="cd-library">
  			            <input type="submit" className="btn red" value="Posted!" />
  			          </li>
  			        </ul>
              </form>
            </div>
    	);
    }

});


module.exports = DairyForm;