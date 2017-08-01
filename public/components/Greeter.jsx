var React = require('react');
var GreeterMessage = require('./GreeterMessage');
var GreeterForm = require('./GreeterForm');

var Greeter = React.createClass({
  getDefaultProps: function() {0
    return {
      name:'React',
      message: 'This is default prop message'
    };
  },

  getInitialState: function(){
    return {
      name : this.props.name,
      message: this.props.message
    };
  },


  onHandleFormClick: function(updates) {
        this.setState(updates);
  },

  render: function() {
   var name = this.state.name;
   var message = this.state.message;
    return (
      <div>
   <GreeterMessage name={name} message={message}/>
   <GreeterForm onNewClickFunction={this.onHandleFormClick}/>
    </div>
    );
  }
});

module.exports = Greeter;
