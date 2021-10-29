// *Agrupamos la lista

import { Todo } from "./todo.class";

export class TodoList{
  constructor(){

    // this.todos = [];
    this.getLocalStorage();
  }
  // *Methods
  newTodo( todo ){
    this.todos.push( todo )
    this.guardarLocalStorage();
  };

  deleteTodo( id ){
    this.todos = this.todos.filter( todo => todo.id != id )
  };

  statusTodo( id ){
    for( const todo of this.todos ){
      // console.log(id, todo.id)

      if (todo.id == id) {
        todo.completado = !todo.completado
        this.guardarLocalStorage();
        break
      }
    }
  };

  deleteComplet(){
    this.todos = this.todos.filter( todo => !todo.completado )
    this.guardarLocalStorage();
  };


  // * Methods localStorage

  guardarLocalStorage(){

    localStorage.setItem('todo', JSON.stringify( this.todos ) );

  };

  getLocalStorage(){
    
    this.todos = (localStorage.getItem('todo')) 
                  ? JSON.parse( localStorage.getItem( 'todo' ) )  
                  : [];
    // * Nuevo objeto como instacia de TODO 
    this.todos = this.todos.map( obj => Todo.fromJson( obj ) )


  }
}