const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((pessoa) => pessoa.managers.find((pessoaId) => pessoaId === id));
}
function getRelatedEmployees(managerId) {
  if (isManager(managerId) !== true) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter((pessoa) => pessoa.managers.includes(managerId))
    .map((element) => `${element.firstName} ${element.lastName}`);
}
module.exports = { isManager, getRelatedEmployees };
