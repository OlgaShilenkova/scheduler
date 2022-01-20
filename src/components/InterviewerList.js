import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "./InterviewerList.scss";

export default function InterviewerList(props) {
  const { interviewers, onChange, value } = props;
  //was
  // const { interviewers, setInterviewer, interviewer } = props;

  const parsedInterviewer = interviewers.map((currentInterviewer) => {
    return (
      <InterviewerListItem
        key={currentInterviewer.id}
        name={currentInterviewer.name}
        avatar={currentInterviewer.avatar}
        selected={currentInterviewer.id === value}
        setInterviewer={() => {
          onChange(currentInterviewer.id);
        }}
      />
    );
  });
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer{value}</h4>
      <ul className="interviewers__list">{parsedInterviewer}</ul>
    </section>
  );
}
