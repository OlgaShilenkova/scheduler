//
//1
//
//did not work with FETCHing from server data => have to use find instead filter
//
// ... returns an array of appointments for that day
export function getAppointmentsForDay(state, day) {
  //object in state.day array who's name match the given day
  const sameDay = state.days.find((d) => d.name === day);

  if (state.days.length === 0 || sameDay === undefined) return [];

  // take appointment array for the given day, we'll need to iterate through it, comparing where it's id matches the id of states.appointments and return that value.

  const matchingAppointments = [];
  for (let app of sameDay.appointments) {
    let propertyName = app;

    if (app === state.appointments[propertyName].id) {
      matchingAppointments.push(state.appointments[propertyName]);
    }
  }

  return matchingAppointments;
}

//
//2
//
//The function should return a new object containing the interview data when we pass it an object that contains the interviewer. Otherwise, the function should return null.
// interview: { student: "Archie Cohen", interviewer: 2 },

export function getInterview(state, interview) {
  if (!interview) return null;
  return {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer],
  };
}

//
//3
//
export function getInterviewersForDay(state, day) {
  const sameDay = state.days.find((d) => d.name === day);
  if (state.days.length === 0 || sameDay === undefined) return [];
  return sameDay.interviewers.map((id) => state.interviewers[id]);
}
