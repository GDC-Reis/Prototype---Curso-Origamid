//Prototype
// A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada.
// Prototype está sempre ligada a função e não ao objeto.

function Pessoa(nome, idade){  // Função
    this.nome = nome;
    this.idade = idade;
}

const gustavo = new Pessoa('Gustavo', 23); //Objeto

console.log(Pessoa.prototype); // retorna o objeto
console.log(gustavo.prototype); //undefined


// nomeFuncao.prototype
// É possivel adicionar novas propriedades e métodos ao objeto prototype.

Pessoa.prototype.andar = () => {
    return this.nome + ' andou';
}

Pessoa.prototype.nadar = () => {
    return this.nome + ' nadou';
}

console.log(Pessoa.prototype); // Retorna o Objeto


// Acesso ao Protótipo
// O objeto criado utilizando o construtor, possui acesso aos métodos e propriedades do protótipo deste construtor.
// Lembrando, prototype é uma propriedade de funções apenas.

const teste = new Pessoa('teste', 21);

teste.nome;
teste.idade;
teste.andar();
teste.nadar();


//proto
// O novo objeto acessa os métodos e propriedades do protótipo através da propriedade "__proto__".
// É o papel da engine fazer essa busca, não devemos falar com "__proto__" diretamente.

/*
    Obs: o primeiro "__proto__" será do contrutor e o segundo "__proto__" é do construtor "Object"
*/

//Acessam o mesmo método
// mas __proto__ não terá acesso ao this.name
gustavo.andar();
gustavo.__proto__.andar(); //Não sera utilizado dessa forma


//Herança de Protótipo
// O objeto possui acesso aos métodos e propriedades do protótipo do construtor responsável por criar este objeto.
// O objeto abaixo possui acesso a métodos que nunca definimos, mas são herdados do protótipo de Object.

console.log(Object.prototype);
console.log(gustavo.toString());
console.log(gustavo.isPrototypeOf());
console.log(gustavo.valeuOf);


// ==========================================================================================================================


// Construtores Nativos
// Objetos, Funções, Números, Strings e outros tipos de dados são criados utilizando construtores.
// Esses construtores possuem um protótipo com propriedades e métodos, que poderão ser acessadas pelo tipo de dado.

const pais = 'Brasil';
const cidade = new String('São Paulo');

pais.charAt(0); // B
cidade.charAt(0); // S

String.prototype


// É possivel acessar a função do protótipo
// É comum, principalmente em códigos mais antigos, o uso direto de funções do protótipo do construtor Array.

const lista = document.querySelectorAll('li');

//Transforma em uma array;
const listaArray = Array.prototype.slice.call(lista);

/*
    Existe o método Array.from();
*/


// Método do Objeto vs Protótipo
// Nos objetos nativos existem métodos linkados diretamente ao Objeto e outros linkados ao protótipo.

//Transforma em uma array;
Array.prototype.slice.call(lista);

//Transforma em uma array;
Array.from(lista);

// Retorna uma lista com os métodos / propriedades
Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype);

/*
    "dado.constructor.name", retorna o nome do construtor;
*/


/*
    // Apenas os Métodos do Protótipo são Herdados
    [1,2,3].slice(); // Existe
    [1,2,3].from(); // Não Existe
*/


// Entenda o que está sendo retornado
// Os métodos e propriedades acessando com o '.' são referencias ao tipo de dados que é retornado antes desse '.'

const Carro = {
    marca: 'Ford',
    preco: 2000,
    acelerar(){
        return true;
    }
}

Carro // Object
Carro.marca // String 
Carro.preco // Number
Carro.acelerar // Function
Carro.acelerar() // Boolean -> Porque a função está sendo executada e o valor quer a função "acelerar" retorna é um valor booleano
Carro.marca.charAt // Function
Carro.marca.charAt(0) // Function

/*
 Verifica o nome do construtor com ".constructor.name"
 Exemplo: Carro.preco.constructor.name //"Number" 
 */