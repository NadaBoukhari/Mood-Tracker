import React from "react";
import Navbar from "./models/Navbar";
import Welcome from "./models/Welcome";
import Options from "./models/Options";
import Calendar from "./models/Calendar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="row">
              <Navbar />
            </div>
            <div className="row">
              <Welcome />
            </div>
            <div className="row">
              <Options />
            </div>
            <div className="row" style={{ marginBottom: "1%" }}>
              <Calendar />
              <Calendar />
              <Calendar />
              <Calendar />
            </div>
            <div className="row" style={{ marginBottom: "1%" }}>
              <Calendar />
              <Calendar />
              <Calendar />
              <Calendar />
            </div>
            <div className="row" style={{ marginBottom: "1%" }}>
              <Calendar />
              <Calendar />
              <Calendar />
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
