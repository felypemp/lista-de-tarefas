const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas')

function criaLi() {
  const li = document.createElement('li');
  return li;

}

inputTarefa.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
  }
})

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li)
}

btnTarefa.addEventListener('click', () =>{
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value)
})