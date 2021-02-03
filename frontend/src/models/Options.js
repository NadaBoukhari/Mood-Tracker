import React from "react";

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col" style={{textAlign:"center", marginBottom:"2%"}}>
        <button style={{marginRight:"1%"}}>Month</button>
        <button>Year</button>
      </div>
    );
  }
}

export default Options;
