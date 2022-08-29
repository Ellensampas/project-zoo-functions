const data = require('../data/zoo_data');

const { species, employees } = data;
function getOldestFromFirstSpecies(id) {
  let idadeInicial = 0;
  const array = [];
  const pessoa = employees.filter((pessoaa) => pessoaa.id === id)
    .find((animal) => animal).responsibleFor;
  const animalDaPessoa = species.find((ban) => ban.id === pessoa[0]).residents;
  animalDaPessoa.forEach((bani) => {
    if (bani.age > idadeInicial) {
      idadeInicial = bani.age;
    }
  });
  const alguma = animalDaPessoa.find((age) => age.age === idadeInicial);
  array.push(alguma.name, alguma.sex, alguma.age);
  return array;
}

module.exports = getOldestFromFirstSpecies;
