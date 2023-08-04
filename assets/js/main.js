const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const listaTarefa = document.querySelector('.tarefas');

function CriaLi(){
    
}

btnTarefa.addEventListener('click', () => {
    if (!inputTarefa.value) return;
    adicionaTarefa(inputTarefa.value);
})

function adicionaTarefa(textoInput){
    listaTarefa.innerHTML = textoInput;
}