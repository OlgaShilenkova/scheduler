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
  function updateSpots(requestType) {
    //reach to particular day
    const rightDay = state.days.find((day) => {
      if (day.name === state.day) {
        //if we booking -> decrease spots number
        if (requestType === "bookInterview") {
          return { ...rightDay, spots: rightDay.spots - 1 };
        } else {
          return { ...rightDay, spots: rightDay.spots + 1 };
        }
      } else {
        return { ...rightDay };
      }
      // return rightDay;
    });
  }

  /*
    //reach to appountments id of that day

    const appointmentsOfTheDay = rightDay.appointments;
    for (const app of appointmentsOfTheDay)

    //reach to interview value
    const statusInterview = state.appointments[appointmentId].interview;
    console.log("hasInterview", hasInterview);

    console.log(`appointmentId, interviewObj`);
    console.log(appointmentId, interviewObj);
    console.log(`state.days, state.day`);
    console.log(state.days, state.day);
*/

  //Creating Appointment
  function bookInterview(appointmentId, interviewObj) {
    // make clone of appointment
    const newAppointment = {
      ...state.appointments[appointmentId],
      // interview: interviewObj,
    };

    //reach to interview value before changies
    const statusInterview = newAppointment.interview;
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
        // statusInterview is null -> update spot counter in days
        if (!statusInterview) {
          days = updateSpots("bookInterview");
        }
        setState((prev) => ({ ...prev, appointments: newAppointments, days }));
      })
      .catch((error) => error.response);
  }

  //Deleting an Interview
  function cancelInterview(appointmentId, interviewObj) {
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
    return axios
      .delete(
        `/api/appointments/${appointmentId}`
        // newAppointments[appointmentId] // does not impact
      )
      .then(() => {
        const days = updateSpots(); // need to refresh to see spots update after deletion
        setState({ ...state, appointments: newAppointments, days }); // does not impact having PREV or not
      })
      .catch((error) => error.response);
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
