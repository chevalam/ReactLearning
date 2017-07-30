var GreeterMessage = React.createClass({
  render: function() {
    return (
       <div>
      <h1> Hello {this.props.name} </h1>
      <p> {this.props.message}</p>
    </div>
  );
  }
});

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

var firstName = 'srikanth';
ReactDOM.render(
  <Greeter name={firstName} />,
  document.getElementById('app')
);
