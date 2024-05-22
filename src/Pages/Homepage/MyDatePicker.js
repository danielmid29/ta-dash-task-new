import React, { useState, useEffect } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./customDateRange.css"; // custom styles for start and end dates
import { format, isWithinInterval } from "date-fns";

const MyDateRangePicker = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    if (state[0].startDate) {
      setStartDate(state[0].startDate);
    }
    if (state[0].endDate) {
      setEndDate(state[0].endDate);
    }
  }, [state]);

  const dateCellRender = (day) => {
    const date = format(day, "yyyy-MM-dd");
    let className = "";

    if (startDate && format(startDate, "yyyy-MM-dd") === date) {
      className = "start-date";
    } else if (endDate && format(endDate, "yyyy-MM-dd") === date) {
      className = "end-date";
    } else if (
      startDate &&
      endDate &&
      isWithinInterval(day, { start: startDate, end: endDate })
    ) {
      className = "in-range";
    }

    return (
      <div className={`rdrDayNumber ${className}`}>
        <span>{day.getDate()}</span>
      </div>
    );
  };

  return (
    <DateRange
      editableDateInputs={true}
      onChange={(item) => setState([item.selection])}
      moveRangeOnFirstSelection={false}
      ranges={state}
      showDateDisplay={false}
      className="date"
      rangeColors={["#0b74ad1e", "black", "black"]}
      dayContentRenderer={dateCellRender}
    />
  );
};

export default MyDateRangePicker;
