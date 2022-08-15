const pessoa = { nome: 'Jeff'}
pessoa.nome = 'Jessy'
console.log(pessoa)

Object.freeze(pessoa)
pessoa.nome = 'Creuza'


console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
