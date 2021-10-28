// *Agrupamos la lista

export class TodoList{
  constructor(){

    this.todos = [];
  }
  // *Methods
  newTodo( todo ){
    this.todos.push( todo )
  };

  deleteTodo( id ){
    this.todos = this.todos.filter( todo => todo.id != id )
  };

  statusTodo( id ){
    for( const todo of this.todos ){
      // console.log(id, todo.id)

      if (todo.id == id) {
        todo.completado = !todo.completado
        break
      }
    }
  };

  deleteComplet(){
    this.todos = this.todos.filter( todo => !todo.completado )
  }
}