import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { days, value, onChange } = props;
  //was before
  // const { days, day, setDay } = props;

  const parsedDays = days.map((d) => (
    <DayListItem
      key={d.id}
      name={d.name}
      spots={d.spots}
      selected={d.name === value}
      setDay={onChange}
    />
  ));
  return <ul>{parsedDays}</ul>;
}
