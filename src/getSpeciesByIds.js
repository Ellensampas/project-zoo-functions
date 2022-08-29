const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((animal) => ids.find((anima) => anima === animal.id));
}
module.exports = getSpeciesByIds;
