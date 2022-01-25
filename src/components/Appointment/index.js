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
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  console.log(`props.interview ===>`);
  console.log(props.interview);
  //Save new interview
  function save(student, interviewer) {
    const interview = {
      student,
      interviewer,
    };
    transition(SAVING);
    props.bookInterview(props.id, interview).then(() => transition(SHOW));
  }

  //Delete
  // -> confirm
  function deleteInterview(student, interviewer) {
    console.log(`from DeleteInt student, interviewer ***`);
    console.log(student, interviewer);
    const interview = {
      student,
      interviewer,
    };
    transition(CONFIRM);
  }
  //Confirm deletion of interview
  // spinner -> delete -> empty
  function reallyDeleteInterview() {
    transition(DELETING);
    props.cancelInterview(props.id).then(() => transition(EMPTY));
  }

  return (
    <article className="appointment">
      <Header time={props.time} />

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onEdit={back}
          onDelete={deleteInterview}
        />
      )}
      {mode === CREATE && (
        <Form onCancel={back} onSave={save} interviewers={props.interviewers} />
      )}
      {mode === SAVING && <Status message="Saving..." />}
      {mode === DELETING && <Status message="Deliting..." />}
      {mode === CONFIRM && (
        <Confirm
          message=" Delete the appointment?"
          onConfirm={reallyDeleteInterview}
          onCancel={back}
        />
      )}
      {mode === EDIT && (
        <Form
          onCancel={back}
          onSave={save}
          interviewers={props.interviewers}
          // student={props.interview.student}
          // interviewer={props.interview.interviewer}
        />
      )}
    </article>
  );
}
