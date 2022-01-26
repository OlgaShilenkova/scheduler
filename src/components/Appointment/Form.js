import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const { interviewers, onSave, onCancel } = props;

  const reset = () => {
    setStudent("");
    setInterviewer(null);
  };

  const cancel = () => {
    reset();
    onCancel();
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            //turn into controlled component
            value={student}
            onChange={(event) => {
              setStudent(event.target.value);
            }}
          />
        </form>
        <InterviewerList
          interviewers={interviewers}
          value={interviewer}
          // pass down new value from the hook [interviewer, setInterviewer]
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>
            Cancel
          </Button>
          <Button confirm onClick={() => onSave(student, interviewer)}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}

// From Frances BreakOut
// parent Component
/* <Button danger onClick={() => console.log("what's up")}>Hello!</Button> */
// props {danger:true, onClick:() => console.log("what's up")}
// child Component
// return <button style={buttonStyle} onClick={props.onClick}>{props.children}</button>;

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
//
