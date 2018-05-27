// Declaração de variáveis
var nome = "Armando Ricardo Nogueira";
var funcao = "Analista de Sistemas";

console.log("carregando js via arquivo externo mesmo dominio, diretório");

function mostrarNomeCompleto() {
    console.log("Meu nome é " + nome + " e trabalho como " + funcao);
}

function eventoClick() {
    alert("você clicou em um botão!");
}

function sejaBemVindo() {
    console.log('Bem vindo a Formação JavaScript Mestre Jedi!');
}

console.log('Chamando a funcao sejaBemVindo()');
sejaBemVindo();

// POO
var objProfessor = {
    nome: "Prof. Madson Aguiar",
    curso: "Formação JavaScript Mestre Jedi!!! :)",
    ministrarAula: function() {
        console.log('Ministrando aula de JavaScript.');
    }
}

console.log('Objeto Professor')
console.log(objProfessor);

console.log('Acessando a propriedade do objeto');
console.log(objProfessor.nome);
console.log(objProfessor.curso)

console.log('Chamando o método do objeto professor: objProfessor.ministrarAula()');
objProfessor.ministrarAula();

// testando... 12345678

