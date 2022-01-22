// for reference

// function selectUserByName(state, name) {
//   const filteredNames = state.users.filter(user => user.name === name);
//   return filteredNames;
// }
//
//have to use find instead filter
// export function getAppointmentsForDay(state, day) {
//   const sameDay = state.days.find((d) => d.name === day);
//   if (state.days.length === 0 || sameDay === undefined) return [];
//   return sameDay.appointments.map((id) => state.appointments[id]);
// }

//
//MY VERSION did not work with FETCHing from server data => have to use find instead filter
//
// ... returns an array of appointments for that day
export function getAppointmentsForDay(state, day) {
  //   //object in state.day array who's name match the given day
  const sameDay = state.days.find((d) => d.name === day);

  if (state.days.length === 0 || sameDay === undefined) return [];

  //   // take appointment array for the given day, we'll need to iterate through it, comparing where it's id matches the id of states.appointments and return that value.

  const matchingAppointments = [];
  for (let app of sameDay.appointments) {
    let propertyName = app;

    if (app === state.appointments[propertyName].id) {
      matchingAppointments.push(state.appointments[propertyName]);
    }
  }

  return matchingAppointments;
}

//for  reference
// const state = {
//   days: [
//     {
//       id: 1,
//       name: "Monday",
//       appointments: [1, 2, 3]
//     },
//     {
//       id: 2,
//       name: "Tuesday",
//       appointments: [4, 5]
//     }
//   ],
//   appointments: {
//     "1": { id: 1, time: "12pm", interview: null },
//     "2": { id: 2, time: "1pm", interview: null },
//     "3": {
//       id: 3,
//       time: "2pm",
//       interview: { student: "Archie Cohen", interviewer: 2 }
//     },
//     "4": { id: 4, time: "3pm", interview: null },
//     "5": {
//       id: 5,
//       time: "4pm",
//       interview: { student: "Chad Takahashi", interviewer: 2 }
//     }
//   }
// };
