const data = require('../data/zoo_data');

const { employees, species } = data;

const capturando = (id, param) => id.map((anima) => (species
  .find((algo) => algo.id === anima))[param]);

const infos = () => {
  const relatorio = employees.map((nomes) => {
    const infosFunci = { id: nomes.id };
    infosFunci.fullName = `${nomes.firstName} ${nomes.lastName}`;
    infosFunci.species = capturando(nomes.responsibleFor, 'name');
    infosFunci.locations = capturando(nomes.responsibleFor, 'location');
    return infosFunci;
  });
  return relatorio;
};
function getEmployeesCoverage(name) {
  if (!name) { return infos(); }
  const pessoinhas = infos().find((uva) => uva.fullName.includes(name.name) || uva.id === name.id);
  if (!pessoinhas) throw new Error('Informações inválidas');
  return pessoinhas;
}
// console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
