import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewerListItem(props) {
  const { id, name, avatar, selected, setInterviewer } = props;
  console.log("name", name);
  const interviewersClass = classNames({
    interviewers__item: true,
    "interviewers__item--selected": selected,
  });

  return (
    <li
      className={interviewersClass}
      onClick={() => {
        setInterviewer(id);
      }}
    >
      <img className="interviewers__item-image" src={avatar} alt={name} />
      {/* only if selected show the name, don't use name in {}  */}
      {selected && name}
    </li>
  );
}

// <li className="interviewers__item">
//   <img
//   className="interviewers__item-image"
//   src="https://i.imgur.com/LpaY82x.png"
//   alt="Sylvia Palmer"
// />
// Sylvia Palmer
// </li>
