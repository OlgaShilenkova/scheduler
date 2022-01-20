import React, { Fragment } from "react";
import "./styles.scss";
import Confirm from "./Confirm";
import Empty from "./Empty";
import Error from "./Error";
import Form from "./Form";
import Header from "./Header";
import Show from "./Show";
import Status from "./Status";

export default function Appointment(props) {
  const { time, interview, student, interviewer } = props;

  return (
    <article className="appointment">
      <Header time={time} />
      {interview ? (
        <Show student={student} interviewer={interviewer} />
      ) : (
        <Empty />
      )}
    </article>
  );
}
