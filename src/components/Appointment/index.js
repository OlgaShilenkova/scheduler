import React from "react";
import "./styles.scss";
import Confirm from "./Confirm";
import Empty from "./Empty";
import Error from "./Error";
import Form from "./Form";
import Header from "./Header";
import Show from "./Show";
import Status from "./Status";

export default function Appointment(props) {
  console.log("props", props);
  return (
    <article className="appointment">
      <Form interviewers={props.interviewers} />
    </article>
  );
}
