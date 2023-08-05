const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const listaTarefa = document.querySelector('.tarefas');

function CriaLi(){
    const li = document.createElement('li');
    return li;
}

document.addEventListener( 'keypress', function(e) {
    if (e.keyCode === 13){
        if (!inputTarefa.value) return;
        adicionaTarefa(inputTarefa.value) 
    }
});

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class','apagar');
    li.appendChild(botaoApagar);
}

btnTarefa.addEventListener('click', () => {
    if (!inputTarefa.value) return;
    adicionaTarefa(inputTarefa.value);
});

function adicionaTarefa(textoInput){
    const li = CriaLi();
    li.innerText = textoInput;
    listaTarefa.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefa();
};

document.addEventListener('click', function(e) {
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentNode.remove()
    }
})


function salvarTarefa() {
    const liTarefas = listaTarefa.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim;
        console.log(tarefaTexto)
        listaDeTarefas.push(tarefaTexto)
    }
}

