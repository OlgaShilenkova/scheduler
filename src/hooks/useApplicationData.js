import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  //Creating Appointment
  function bookInterview(appointmentId, interviewObj) {
    const newAppointment = {
      ...state.appointments[appointmentId],
      interview: interviewObj,
    };

    const newAppointments = {
      ...state.appointments,
      [appointmentId]: newAppointment,
    };

    return (
      axios
        .put(
          `/api/appointments/${appointmentId}`,
          newAppointments[appointmentId]
        )
        .then(setState((prev) => ({ ...prev, appointments: newAppointments })))
        // .then(setState({ ...state, appointments: newAppointments }))
        .catch((error) => error.response)
    );
  }

  //Deleting an Interview
  function cancelInterview(appointmentId, interviewObj) {
    console.log(`deleting appointmentId, interviewObj ==>`);
    console.log(appointmentId, interviewObj);
    //set interview to null
    const newAppointment = {
      ...state.appointments[appointmentId],
      interview: null,
    };

    //update old appoint. list with new note
    const newAppointments = {
      ...state.appointments,
      [appointmentId]: newAppointment,
    };

    //delete from db
    return (
      axios
        .delete(
          `/api/appointments/${appointmentId}`,
          newAppointments[appointmentId]
        )
        // then(setState((prev) => ({ ...prev, appointments: newAppointments })))
        .then(setState({ ...state, appointments: newAppointments }))
        .catch((error) => error.response)
    );

    //API server with test error
    //   axios.put(`/api/appointments/${appointmentId}`, (request, response) => {
    //     if (process.env.TEST_ERROR) {
    //       setTimeout(() => response.status(500).json({}), 1000);
    //       return;
    //     }
    //   })
    // );
  }
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("api/appointments"),
      axios.get("api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  };
}
