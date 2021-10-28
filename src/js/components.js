import { todoList } from "../index";
import { Todo } from "../classes";

// *Referencias en el HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput    = document.querySelector('.new-todo');
const deleteCompleteds    = document.querySelector('.clear-completed');


export const printTodoHtml = (todo) => {
	const htmlTodo = `
  
  <li class="${ (todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
      <div class="view">
        <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : '' } >
        <label>${todo.tarea}</label>
        <button class="destroy"></button>
      </div>
		<input class="edit" value="Create a TodoMVC template">
	</li>
  
  `

  const div = document.createElement('div')
  div.innerHTML = htmlTodo

  divTodoList.append( div.firstElementChild )

  return div.firstElementChild

};


// *Eventos

txtInput.addEventListener('keyup', ( event )=>{
  // console.log(event)
  // console.log(txtInput.value)
  if (event.keyCode === 13 && txtInput.value.length > 0) {
    const addTodoHtml = new Todo( txtInput.value );
    todoList.newTodo( addTodoHtml );

    printTodoHtml( addTodoHtml );
    txtInput.value = ''
  }
})

divTodoList.addEventListener(`click`,  (event) => {

const nameElement = event.target.localName;
const todoElement = event.target.parentElement.parentElement;
const todoId      = todoElement.getAttribute('data-id')

if ( nameElement.includes('input') ) {
  todoList.statusTodo( todoId );
  todoElement.classList.toggle('completed')

} else if (nameElement.includes('button')) {
    todoList.deleteTodo( todoId );
    divTodoList.removeChild( todoElement )
}

console.log( todoElement )
})


deleteCompleteds.addEventListener('click', () => {

  todoList.deleteComplet()

  for ( let i = divTodoList.children.length - 1; i >= 0; i-- ){
    const elements = divTodoList.children[i];
  
    if (elements.classList.contains('completed') ) {
  
      divTodoList.removeChild(elements)
    }
    
  }


})