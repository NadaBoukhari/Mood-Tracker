import React from "react";

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {day} = this.props;
    return (
      <div
        className="col"
        style={{  marginRight: "1%",marginTop:"1%", border:"solid black" }}
      >
        {day.getDate()}
      </div>
    );
  }
}

export default Box;
