const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  // const nome = species
  //   .find((me) => me.name === animal)
  //   .residents.every((element) => element.age >= age);

  // return nome;
  const nome = species[0].residents;
  const idade = species[0].residents;

  return (
    nome.every((element) => element.name === animal) || idade
      .every((elemento) => elemento.age >= age)
  );
}

console.log(getAnimalsOlderThan('lions', 15));

module.exports = getAnimalsOlderThan;
