import React from "react";
import Button from "components/Button";

export default function Confirm(props) {
  const { message, onConfirm, onCancel } = props;
  console.log("props", props);
  return (
    <main className="appointment__card appointment__card--confirm">
      <h1 className="text--semi-bold">Delete the appointment?</h1>
      <section className="appointment__actions">
        <Button
          danger
          onClick={onCancel} //does not work both onCalcel and onConfirm bcs in props only onDelete passed now
        >
          Cancel
        </Button>
        <Button danger onClick={onConfirm}>
          Confirm
        </Button>
      </section>
    </main>
  );
}

// props
// message:String eg. "Delete the appointment?"
// onConfirm:Function to be called when the user clicks the Confirm button
// onCancel:Function to be called when the user clicks the Cancel button
