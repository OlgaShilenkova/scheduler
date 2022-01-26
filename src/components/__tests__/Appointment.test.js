/*
  We are rendering `<Application />` down below, so we need React.createElement
*/
import React from "react";

/*
  We import our helper functions from the react-testing-library
  The render function allows us to render Components
*/
import { render } from "@testing-library/react";

/*
  We import the component that we are testing
*/
import Appointment from "components/Appointment";

/*
  A test that renders a React Component
*/
/* Group a series of tests —>  wrap them in a describe function. */

describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });
});

/* If the Appointment component in your project has required props, then this is the place we need to fake them.
 */

// # Apointment

// - id
// - time:
// - interview
// - interviewers
// - bookInterview
// - cancelInterview
