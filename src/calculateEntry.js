const data = require('../data/zoo_data');

const { prices } = data;
function countEntrants(pessoas) {
  const adulto = pessoas.filter((adul) => adul.age >= 18 && adul.age < 50).length;
  const childa = pessoas.filter((kid) => kid.age < 18).length;
  const senhor = pessoas.filter((senh) => senh.age >= 50).length;
  return ({ adult: adulto, child: childa, senior: senhor });
}

function calculateEntry(pessoas) {
  if (!pessoas || Object.keys(pessoas).length === 0) { return 0; }
  const peoples = countEntrants(pessoas);
  return (prices.adult * peoples.adult)
  + (prices.child * peoples.child)
  + (prices.senior * peoples.senior);
}

module.exports = { calculateEntry, countEntrants };
