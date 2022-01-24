import React, { Fragment } from "react";
import "./styles.scss";
import Confirm from "./Confirm";
import Empty from "./Empty";
import Error from "./Error";
import Form from "./Form";
import Header from "./Header";
import Show from "./Show";
import Status from "./Status";
import { useVisualMode } from "hooks/useVisualMode";

// mode constants
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  const interviewers = [
    // {
    //   id: 1,
    //   name: "Sylvia Palmer",
    //   avatar: "https://i.imgur.com/LpaY82x.png",
    // },
    // {
    //   id: 2,
    //   name: "Tori Malcolm",
    //   avatar: "https://i.imgur.com/Nmx0Qxo.png",
    // },
  ];
  return (
    <article className="appointment">
      <Header time={props.time} />

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          // onEdit={}
          // onDelete={}
        />
      )}
      {mode === CREATE && (
        <Form
          onCancel={() => back()}
          // onSave={}
          interviewers={interviewers}
        />
      )}
    </article>
  );
}
