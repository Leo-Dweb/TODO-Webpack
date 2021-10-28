// * Style Global
import './style.css';

// *Importaciones
import { Todo, TodoList } from "./classes";
import { printTodoHtml } from './js/components';

// *Inicializar class
export const todoList = new TodoList()

const tarea1   = new Todo( 'Tarea de prueba 1 en HTML' )
todoList.newTodo( tarea1 )


// console.log(todoList)

printTodoHtml( tarea1 )

