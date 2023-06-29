import React, { PureComponent } from "react";

export class AddContact extends PureComponent {
  state={FirstName:"",LastName:"",Phone:"",email:""};
  add=(e)=>{
    e.preventDefault();
    if(this.state.FirstName==='' || this.state.email==='' || this.state.Phone===""){
      alert("All the fields are Mandatory!!!");
      return;
    }
    
    console.log(this.state);
    this.props.addContactHandler(this.state);
    this.setState({FirstName:"",LastName:"",Phone:"",email:""});
  };
  render() {
    return (
      <div className="items container text-center">
        <h2>Add Contacts</h2>
        <form onSubmit={this.add}>
          <div className="row mx-3">
            <div className="col-sm-4 offset-md-4">
              <input
              id="FN"
                type="text"
                className="form-control"
                placeholder="First name"
                aria-label="First name"
                onChange={(e)=>this.setState({FirstName:e.target.value})}
              />
            </div>
          </div>
          <br />
          <div className="row mx-3">
            <div className="col-sm-4 offset-md-4">
              <input
                id="LN"
                type="text"
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
                onChange={(e)=>this.setState({LastName:e.target.value})}
              />
            </div>
          </div>
          <br />
          <div className="row mx-3">
            <div className="col-sm-4 offset-md-4">
              <input
                id="E"
                type="email"
                className="form-control"
                placeholder="Email"
                aria-label="Email"
                onChange={(e)=>this.setState({email:e.target.value})}
              />
            </div>
          </div>
          <br />
          <div className="row mx-3">
            <div className="col-sm-4 offset-md-4">
              <input
                id="PH"
                type="text"
                className="form-control"
                placeholder="Phone No."
                aria-label="Phone No."
                onChange={(e)=>this.setState({Phone:e.target.value})}
              />
            </div>
          </div>
          <br />
          <button type="submit" className="btn btn-primary" onClick={() => {document.getElementById("FN").value = "";document.getElementById("LN").value="";document.getElementById("E").value="";document.getElementById("PH").value=""}}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;