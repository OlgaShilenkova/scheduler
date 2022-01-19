import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {
  const { name, spots, selected, setDay } = props;

  const dayClass = classNames({
    "day-list__item": true,
    "day-list__item--selected": selected,
    "day-list__item--full": spots === 0,
  });

  const formatSpots = function () {
    if (spots === 0) {
      return `no spots remaining`;
    }
    if (spots === 1) {
      return `1 spot remaining`;
    }
    if (spots > 1) {
      return `${spots} spots remaining`;
    }
  };

  return (
    <li
      className={dayClass}
      onClick={() => {
        setDay(name);
      }}
    >
      <h2 className="text--regular">Day {name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}
// "no spots remaining"
// "1 spot remaining"
