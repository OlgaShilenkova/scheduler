import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "./InterviewerList.scss";

export default function InterviewerList(props) {
  const { interviewers, setInterviewer, interviewer } = props;

  const parsedInterviewer = interviewers.map((currentInterviewer) => {
    console.log(currentInterviewer);
    return (
      <InterviewerListItem
        key={currentInterviewer.id}
        name={currentInterviewer.name}
        avatar={currentInterviewer.avatar}
        selected={currentInterviewer.id === interviewer}
        setInterviewer={() => {
          setInterviewer(currentInterviewer.id);
        }}
      />
    );
  });
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">
        Interviewer{interviewer}
      </h4>
      <ul className="interviewers__list">{parsedInterviewer}</ul>
    </section>
  );
}
