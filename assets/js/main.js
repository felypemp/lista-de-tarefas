const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas')

function criaLi() {
  const li = document.createElement('li');
  
}

function criaTarefa(textoInput){
    console.log(textoInput);
}

btnTarefa.addEventListener('click', () =>{
  if (!inputTarefa.value) return;

  criaTarefa(inputTarefa.value)
})