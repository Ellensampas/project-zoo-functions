const data = require('../data/zoo_data');

const { species } = data;

function unica() {
  const nome = species.reduce((acc, anis) => {
    acc[anis.name] = anis.residents.length;
    return acc;
  }, {});
  return nome;
}

function anima(animal) {
  const buscaNome = species.find((animais) => animais.name === animal.specie).residents.length;
  return buscaNome;
}

function countAnimals(animal) {
  if (!animal) { return unica(); }
  if (!animal.sex) { return anima(animal); }
  return species.find((ani) => ani.name === animal.specie).residents
    .filter((sex) => animal.sex === sex.sex).length;
}
// console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));

module.exports = countAnimals;
