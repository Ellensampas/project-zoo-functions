
const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  return species.find((element) => element.name === animal)
    .reduce((acc, curr) => acc + (curr.residents.length + curr.residents.length), {});

    const getElephants = () =>
  species.find((specie) => specie.name === 'elephants');

  const averageAge = ({ residents }) =>
  residents.reduce((sum, elephant) => sum + elephant.age, 0) / residents.length;
}

console.log(countAnimals('penguins'));

module.exports = countAnimals;
