import React from "react";

export default class form extends React.Component {
  state = {
    email: "",
    Password: "",
   
  };



  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });

  };
  onSubmit = ()=> {
    Console.log(this.state);

  };

  
  render() {
    return (
      <form>
        <input
          name="email"
          placeholder="Email"
          value={this.stateemail}
          onChange={e => this.change(e)}

          />
          <input
          name="Password"
          placeholder="Password"
          value={this.state.Passowrd}
          onChange={e => this.change(e)}

          />

            <button onClick={e => this.onSubmit(e)}>Submit</button>
          </form>
          
    );
  }
}
 