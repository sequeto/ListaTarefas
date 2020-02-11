var listElement = document.querySelector("#aplicacao ul");
var inputElement = document.querySelector("#aplicacao input");
var buttonElement = document.querySelector("#aplicacao button");

var tarefas = [
    
]

function renderLista(){
    for(item of tarefas)
    {
        var itemElement = document.createElement('li');
        var itemTexto = document.createTextNode(item);
        
        itemElement.appendChild(itemTexto);
        listElement.appendChild(itemElement);
    }
}

renderLista();