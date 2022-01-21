// for reference

// function selectUserByName(state, name) {
//   const filteredNames = state.users.filter(user => user.name === name);
//   return filteredNames;
// }
//

//... returns an array of appointments for that day
export function getAppointmentsForDay(state, day) {
  //object in state.day array who's name match the given day
  const sameDay = state.days.filter((d) => d.name === day);

  // take appointment array for the given day, we'll need to iterate through it, comparing where it's id matches the id of states.appointments and return that value.
  const matchingAppointments = [];
  for (let app of sameDay[0].appointments) {
    let propertyName = app;

    if (app === state.appointments[propertyName].id) {
      matchingAppointments.push(state.appointments[propertyName]);
    }
  }

  return matchingAppointments;
}
