import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoContext } from '../TodoContext';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import './App.css';
function AppUI(){
    return (
        <React.Fragment>
        <TodoCounter />
        <TodoSearch/>
        <TodoContext.Consumer>
            {({error,
            loading,
            searchedTodos,
            completeTodos,
            deleteTodo
            }) => {
                <TodoList>
                    {searchedTodos.map(todo =>( 
                        <TodoItem  key={todo.text} text={todo.text} complete={todo.complete} onComplete = {() =>completeTodos(todo.text)  } onDelete = {() =>deleteTodo(todo.text)}/>
                     ))} 
                    {error && <p>Desespérate, hubo un error...</p>}
                    {loading && <p>Estamos cargando,no desesperes...</p>}
                    {(!loading && !searchedTodos.length)&&<p>Crea tu primer TODO!</p>} 
                </TodoList>
  
            }}
        </TodoContext.Consumer>
        <CreateTodoButton />
      </React.Fragment>
    );
}

export {AppUI};