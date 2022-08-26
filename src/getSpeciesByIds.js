const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((animal) => ids.find((anima) => anima === animal.id));
}

// console.log(getSpeciesByIds('78460a91-f4da-4dea-a469-86fd2b8ccc84'));

module.exports = getSpeciesByIds;
