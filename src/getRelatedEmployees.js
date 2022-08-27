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
console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = { isManager, getRelatedEmployees };
