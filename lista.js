var listElement = document.querySelector("#aplicacao ul");
var inputElement = document.querySelector("#entrada");
var buttonElement = document.querySelector("#botao");

var tarefas = [
];

function renderLista(){

    listElement.innerHTML = '';

    for(item of tarefas)
    {
        var itemElement = document.createElement('li'); // Cria elemento da lista
        var itemTexto = document.createTextNode(item);
        var linkElement = document.createElement('a'); // Cria link para exclusão
        var linkText = document.createTextNode(' Excluir');
        var posicao = tarefas.indexOf(item); // Informa posição do item no vetor

        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', 'deletaTarefa('+ posicao +')'); // Associa a função de exclusão ao link
        linkElement.appendChild(linkText);
        
        itemElement.appendChild(itemTexto);
        itemElement.appendChild(linkElement);

        listElement.appendChild(itemElement); // Adiciona o item na lista
    }
}

renderLista();

function adicionaTarefa(){
    var entrada = inputElement.value;
    tarefas.push(entrada); // Adiciona no vetor de tarefas o item informado
    inputElement.value = '';
    renderLista();
}

buttonElement.onclick = adicionaTarefa;

function deletaTarefa(posicao){
    tarefas.splice(posicao, 1); // Remove no vetor de tarefas na posição indicada
    renderLista();
}