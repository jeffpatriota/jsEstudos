// usando a notaç]ao literal 

const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funções construtores 
function Produto (nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
const p1 = new Produto('Caneta', 7.89, 0.10)
const p2 = new Produto('Notebbok', 2998.99, 0.15)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory 
function criarFuncionario(nome, salarioBase, faltas) {
    return{
        nome, 
        salarioBase, 
        faltas,
        getSlario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('Jeff', 7980, 2)
const f2 = criarFuncionario('Jessy', 11400, 1)
console.log(f1.getSlario(), f2.getSlario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Jessy'
console.log(filha)

// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)