import React from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col" style={{marginTop: "1%"}}>
        <h4 style={{ display: "inline", float: "right"}}>Home</h4>
        <h4 style={{ display: "inline", float: "right ", marginRight:"1%" }}>About</h4>
      </div>
    );
  }
}

export default Navbar;
