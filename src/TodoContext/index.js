import React from 'react';
import { useLocalStorage } from './useLocalStorage';
const TodoContext =  React.createContext();
function TodoProvider(props){
    const {item : todos, saveItem: saveTodos,loading,error} = useLocalStorage('TODOS_V1',[])
    const [searchValue,setsearchValue] = React.useState('');
    const completedTodos = todos.filter(todo => !!todo.complete).length;
    const totalTodos = todos.length;
    let searchedTodos = [];
    if(!searchValue.length >= 1)
    {
      searchedTodos = todos;
    }
    else{
      searchedTodos = todos.filter(todo => {
        const searchText = searchValue.toLocaleLowerCase();
        const todoText = todo.text.toLowerCase()
        return todoText.includes(searchText);
      });
  
    }
  
    const completeTodos = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      newTodos[todoIndex].complete = true;
      saveTodos(newTodos);
  }
    const deleteTodo = (text)=>{
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      newTodos.splice([todoIndex],1);
      saveTodos(newTodos);
    }
    return(
        <TodoContext.Provider value ={{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setsearchValue, 
            searchedTodos ,
            completeTodos ,
            deleteTodo ,
        
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext,TodoProvider};