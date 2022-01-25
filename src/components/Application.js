import React, { useState, useEffect } from "react";
import axios from "axios";
import Appointment from "./Appointment";
import "components/Application.scss";
import DayList from "./DayList";
import {
  getAppointmentsForDay,
  getInterview,
  getInterviewersForDay,
} from "helpers/selectors";

//mock data for appointments
// const appointments = [
//   {
//     id: 1,
//     time: "12pm",
//   },
//   {
//     id: 2,
//     time: "1pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer: {
//         id: 3,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       },
//     },
//   },
//   {
//     id: 3,
//     time: "2pm",
//   },
//   {
//     id: 4,
//     time: "3pm",
//     interview: {
//       student: "Archie Andrews",
//       interviewer: {
//         id: 4,
//         name: "Cohana Roy",
//         avatar: "https://i.imgur.com/FK8V841.jpg",
//       },
//     },
//   },
//   {
//     id: 5,
//     time: "4pm",
//   },
// ];

export default function Application() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  // let dailyAppointments = [];
  const dailyAppointments = getAppointmentsForDay(state, state.day);

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

    // setState((prev) => ({ ...prev, appointments: newAppointments }));

    return (
      axios
        .put(
          `/api/appointments/${appointmentId}`,
          newAppointments[appointmentId]
        )
        // .then(setState((prev) => ({ ...prev, appointments: newAppointments })));
        .then(setState({ ...state, appointments: newAppointments }))
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
    return axios
      .delete(
        `/api/appointments/${appointmentId}`,
        newAppointments[appointmentId]
      )
      .then(setState({ ...state, appointments: newAppointments }));
    // .then(setState((prev) => ({ ...prev, appointments: newAppointments })))
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

  const interviewers = getInterviewersForDay(state, state.day);

  const schedule = dailyAppointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);

    return (
      <Appointment
        key={appointment.id}
        {...appointment}
        interview={interview}
        interviewers={interviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    );
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} value={state.day} onChange={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {schedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}

// for reference
// state object
// {
//   day: "",
//   days: [],
//   appointments: {
//     "1": {
//       id: 1,
//       time: "12pm",
//       interview: null
//     }
//   },
//   interviewers: {}
// }
