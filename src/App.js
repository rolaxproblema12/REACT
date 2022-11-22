import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
const defaulttodos = [
  {text : 'Cortar cebolla', complete : false},
  {text : 'Tomar el curso de intro a React ', complete : false},
  {text : 'Llorar con la llorona', complete : false},
];

function App() {
  const [todos, setTodos] = React.useState(defaulttodos);
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
    setTodos(newTodos);
}
  const deleteTodo = (text)=>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice([todoIndex],1);
    setTodos(newTodos);
  }
  return (
    <React.Fragment>
      <TodoCounter  
        total = {totalTodos}
        completed = {completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setsearchValue ={setsearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo =>( 
          <TodoItem  key={todo.text} text={todo.text} complete={todo.complete} onComplete = {() =>completeTodos(todo.text)  } onDelete = {() =>deleteTodo(todo.text)}/>
        ))} 
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
