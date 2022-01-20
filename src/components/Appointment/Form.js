import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
  const [student, setStudent] = useState(student || "");
  const [interviewer, setInterviewer] = useState(interviewer || null);

  let { interviewers, onSave, onCancel } = props;
  console.log("props of FORM:", props);
  //was
  //const { student,interviewer, interviewers, onSave, onCancel } = props
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            //turn into controlled component
            value={props.student}
            onChange={(event) => {
              setStudent(event.target.value);
            }}
          />
        </form>
        {/* <InterviewerList */}
        {/* your code goes here */}
        {/* interviewers={interviewers}
          value={props.interviewer}
          onChange={(event) => {
            setInterviewer(event.target.value);
          }}
        /> */}
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button
            danger
            // {/* your code goes here */ }
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button
            confirm
            // {/* your code goes here */ }
            onClick={onSave}
          >
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}

// As part of our Edit story, the Form component should take the following props:

// student:String
// interviewer:Number
// interviewers:Array
// onSave:Function
// onCancel:Function
// As part of our Create story, the Form component should take the following props:

// interviewers:Array
// onSave:Function
// onCancel:Function

// The Form component should track the following state:

// student:String
// interviewer:Number
// The Form component should have the following actions:

// setStudent:Function
// setInterviewer:Function
