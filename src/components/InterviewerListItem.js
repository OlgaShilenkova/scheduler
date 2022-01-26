import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewerListItem(props) {
  const { name, avatar, selected, setInterviewer } = props;

  const interviewersClass = classNames({
    interviewers__item: true,
    "interviewers__item--selected": selected,
  });

  return (
    <li className={interviewersClass} onClick={setInterviewer}>
      <img className="interviewers__item-image" src={avatar} alt={name} />
      {/* only if selected show the name, don't use name in {}  */}
      {selected && name}
    </li>
  );
}
