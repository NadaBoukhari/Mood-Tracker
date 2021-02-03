import React from "react";
import Box from "./Box";

class Calendar extends React.Component {
  daysOFTHISWEEK = [
    { week: 1, daysOfTheWeek: [] },
    { week: 2, daysOfTheWeek: [] },
    { week: 3, daysOfTheWeek: [] },
    { week: 4, daysOfTheWeek: [] },
  ];
  constructor(props) {
    super(props);
    this.state = {};
  }

  getDaysInMonthUTC(month, year) {
    var date = new Date(Date.UTC(year, month, 1));
    var days = [];
    while (date.getUTCMonth() === month) {
      days.push(new Date(date));
      date.setUTCDate(date.getUTCDate() + 1);
    }
    
    return days;
  }

  splitArrayIntoChunksOfLen(arr, len) {
    var chunks = [],
      i = 0,
      n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, (i += len)));
    }

    return chunks;
  }

  render() {
    const days = this.getDaysInMonthUTC(11, 2020);
    const chunks = this.splitArrayIntoChunksOfLen(days, 7);
    return (
      <div className="col" style={{marginRight:"1%", marginLeft:"1%"}}>
        {chunks.map((itemChunk) => (
          <div className="row">
            {itemChunk.map((chunky) => (
              <Box day={chunky} />
            ))}
          </div>
        ))}
        <div className="row">
          {/* {days.map((itemMap) => (
            <div >
              <Box day={itemMap} />
            </div>
          ))} */}
        </div>
      </div>
    );
  }
}

export default Calendar;
