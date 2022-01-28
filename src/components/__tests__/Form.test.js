import React from "react";
import { render, cleanup } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import Form from "components/Appointment/Form";

afterEach(cleanup);

describe("Form", () => {
  const interviewers = [
    {
      id: 1,
      name: "Sylvia Palmer",
      avatar: "https://i.imgur.com/LpaY82x.png",
    },
  ];
  //1
  it("renders without student name if not provided", () => {
    const { getByPlaceholderText } = render(
      <Form interviewers={interviewers} />
    );
    expect(getByPlaceholderText("Enter Student Name")).toHaveValue("");
  });
  //2
  it("renders with initial student name", () => {
    const { getByTestId } = render(
      <Form interviewers={interviewers} student="Lydia Miller-Jones" />
    );
    expect(getByTestId("student-name-input")).toHaveValue("Lydia Miller-Jones");
  });

  //3
  it("validates that the student name is not blank", () => {
    /* 1. Create the mock onSave function */
    const onSave = jest.fn();

    /* 2. Render */
    const { getByText } = render(
      <Form interviewers={interviewers} student="" onSave={onSave} />
    );

    /*3. Click the save button */
    fireEvent.click(getByText("Save"));

    /* 4. validation is shown */
    expect(getByText(/student name cannot be blank/i)).toBeInTheDocument();

    /* 5. onSave is not called */
    expect(onSave).not.toHaveBeenCalled();
  });

  //4
  it("validates that the student name is given but interview is not selected", () => {
    /* 1. Create the mock onSave function */
    const onSave = jest.fn();
    /* 2. Render */
    const { getByText } = render(
      <Form
        interviewers={interviewers}
        student="Olga"
        interviewer={null}
        onSave={onSave}
      />
    );
    /*3. Click the save button */
    fireEvent.click(getByText("Save"));

    /* 4. validation is shown */
    expect(getByText(/select interviewer to continue/i)).toBeInTheDocument();

    /* 5. onSave is not called */
    expect(onSave).not.toHaveBeenCalled();
  });

  //5
  it("can successfully save after submitting with empty student and given interviewer", () => {
    /* 1. Create the mock onSave function */
    const onSave = jest.fn();
    /* 2. Render */
    const { getByText, getByPlaceholderText, queryByText } = render(
      <Form
        interviewers={interviewers}
        student=""
        interviewer={3}
        onSave={onSave}
      />
    );
    /*3. Click the save button */
    fireEvent.click(getByText("Save"));

    /* 4. validation is shown */
    expect(getByText(/student name cannot be blank/i)).toBeInTheDocument();

    /* 5. change the input value for student name */
    fireEvent.change(getByPlaceholderText("Enter Student Name"), {
      target: { value: "Olga" },
    });

    /*6. Click the save button  again */
    fireEvent.click(getByText("Save"));

    /* 7. validation is shown */
    expect(queryByText(/student name cannot be blank/i)).toBeNull();

    /* 8. onSave is called once with proper values */
    expect(onSave).toHaveBeenCalledTimes(1);
    expect(onSave).toHaveBeenCalledWith("Olga", 3);
  });

  //6
  it("can successfully save after submitting with given interviewer and given student", () => {
    /* 1. Create the mock onSave function */
    const onSave = jest.fn();
    /* 2. Render */
    const { getByText, queryByText, getByTestId } = render(
      <Form
        interviewers={interviewers}
        student="Pedro"
        interviewer={4}
        onSave={onSave}
      />
    );
    /*3. Click the save button */
    fireEvent.click(getByText("Save"));

    /* 4. validation is shown */
    expect(queryByText(/student name cannot be blank/i)).toBeNull();
    expect(queryByText(/select interviewer to continue/i)).toBeNull();

    /* 5. onSave is called once with proper values */
    expect(onSave).toHaveBeenCalledTimes(1);
    expect(onSave).toHaveBeenCalledWith("Pedro", 4);
  });

  //7
  it("calls onCancel and resets the input field", () => {
    /* 1. Create the mock onSave function */
    const onSave = jest.fn();
    const onCancel = jest.fn();

    /* 2. Render */
    const { getByText, queryByText, getByPlaceholderText } = render(
      <Form
        interviewers={interviewers}
        student="OlgaShilenk"
        interviewer={5}
        onSave={onSave}
        onCancel={onCancel}
      />
    );
    /*3. Click the save button */
    fireEvent.click(getByText("Save"));

    /* 4. change the input value for student name */
    fireEvent.change(getByPlaceholderText("Enter Student Name"), {
      target: { value: "Olga" },
    });

    /*5. Click the Cancel button */
    fireEvent.click(getByText("Cancel"));

    /* 6. validation is not shown */
    expect(queryByText(/student name cannot be blank/i)).toBeNull();

    /* 7. resets the input */
    expect(getByPlaceholderText("Enter Student Name")).toHaveValue("");

    /* 7. onCancel is called once  */
    expect(onCancel).toHaveBeenCalledTimes(1);
  });
});
