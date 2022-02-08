import { useState, useEffect } from "react";
import axios from "axios";

// State Logic
export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  // Update Interview Spots
  function updateSpots() {
    axios.get("/api/days").then((res) => {
      setState((prev) => ({ ...prev, days: res.data }));
    });
  }

  //Creating Appointment
  function bookInterview(appointmentId, interviewObj) {
    // make clone of appointment
    const newAppointment = {
      ...state.appointments[appointmentId],
      interview: interviewObj,
    };

    //clone new Interview
    newAppointment.interview = { ...interviewObj };
    let days = [...state.days];

    // make clone of all appontments add one new app.
    const newAppointments = {
      ...state.appointments,
      [appointmentId]: newAppointment,
    };

    return axios
      .put(`/api/appointments/${appointmentId}`, newAppointments[appointmentId])
      .then(() => {
        //update spot counter in days
        updateSpots();
        setState((prev) => ({ ...prev, appointments: newAppointments, days }));
      });
  }

  //Deleting an Interview
  function cancelInterview(appointmentId) {
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
    return axios.delete(`/api/appointments/${appointmentId}`).then(() => {
      updateSpots();
      setState((prev) => {
        setState({ ...prev, appointments: newAppointments });
      });
    });
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
