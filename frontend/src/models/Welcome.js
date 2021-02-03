import React from "react";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col" style={{marginBottom:"5%"}}>
        <h1 style={{ textAlign:"center"}}>Welcome</h1>
      </div>
    );
  }
}

export default Welcome;
