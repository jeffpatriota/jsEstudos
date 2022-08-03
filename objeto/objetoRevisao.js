// coleção dinâmica de pares chave/valor
const produto = new Object 
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 99000,
    proprietario: {
        nome: 'Jeff',
        idade: 35,
        endereco: {
          logradouro: 'Rua Joaquim Xavier',
          numero: 123
        }
    }, 
    condutores: [{
        nome: 'Jessy',
        idade: 31
    }],
    calcularValorSeguro: function() {

    }
}
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro']
console.log(carro)