const data = require('../data/zoo_data');

const { species, hours } = data;

const dias = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: [],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: [],
  },
  Thursday: 'aaaa',
  Friday: 'aaaa',
  Saturday: 'aaaa',
  Sunday: 'aaaa',
  Monday: 'aaaa',
};
function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return dias;
  }
  return species.find((animal) => animal.name === scheduleTarget).availability;
}
function substituiAnimal(dia) {
  return hours.find((diass) => diass.hours === getSchedule());
}
console.log(substituiAnimal('Tuesday'));

module.exports = getSchedule;
