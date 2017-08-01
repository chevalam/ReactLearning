var React = require('react');

var GreeterForm = React.createClass({
  onFormButtonClick: function(e){
    e.preventDefault();
    var name = this.refs.name.value;
    var message = this.refs.message.value;
    var updates = {};

    if(name.length > 0) {
      updates.name = name;
    this.refs.name.value = '';
  }

  if(message.length > 0) {
    updates.message = message;
    this.refs.message.value = '';
    }

    this.props.onNewClickFunction(updates);
  },
    render: function(){
    return (
      <form onSubmit={this.onFormButtonClick}>
        <input type="text" ref="name" placeholder="Enter Heading"></input><br/>
        <textarea ref="message" placeholder="Enter Message"></textarea><br/>

        <button>Submit</button>
      </form>
    );
  }
});

module.exports = GreeterForm;
