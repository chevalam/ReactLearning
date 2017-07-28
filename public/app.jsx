var GreeterMessage = React.createClass({
  render: function() {
    return (    <div>
      <h1> GreeterMessage heading </h1>
      <p> Paragraph of GreeterMessage. Nesting tryouts</p>
    </div>
  );
  }
});

var GreeterForm = React.createClass({
  render: function(){
    return (
      <form>
        <input ref="name"></input>
        <button>submitbutton</button>
      </form>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name:'React',
      message: 'This is default prop message'
    };
  },

  getInitialState: function(){
    return {
      name : this.props.name
    };
  },

  onButtonClick: function(e) {
    console.log("hello onButtonClick");
    e.preventDefault();
    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value = '';
    if(typeof name === 'string' && name.length > 0) {
    this.setState({
      name:name
    });
   }
  },

  render: function() {
   var name = this.state.name;
   var message = this.props.message;
    return (
      <div>
        <h1>Hello {name} !</h1>
      <p>{message+'!!'}</p>

   <GreeterMessage />

    <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"></input>
          <button type="submit">Set Name</button>
        </form>
        <br></br>
        <GreeterForm/>
    </div>
    );
  }
});

var firstName = 'srikanth';
ReactDOM.render(
  <Greeter name={firstName} />,
  document.getElementById('app')
);
