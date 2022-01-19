import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { days, day, setDay } = props;

  const parsedDays = days.map((d) => (
    <DayListItem
      key={d.id}
      name={d.name}
      spots={d.spots}
      selected={d.name === day}
      setDay={setDay}
    />
  ));
  console.log(parsedDays);
  return <ul>{parsedDays}</ul>;
}
