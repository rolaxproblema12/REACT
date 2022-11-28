import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoContext } from '../TodoContext';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import {Modal} from '../Modal';
import {TodoForm} from '../TodoFrom';
import './App.css';
function AppUI(){
    const {error,
        loading,
        searchedTodos,
        completeTodos,
        deleteTodo,
        openModal,
        setOpenModal,
        } = React.useContext(TodoContext)
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch/>
                <TodoList>
                    {searchedTodos.map(todo =>( 
                        <TodoItem  key={todo.text} text={todo.text} complete={todo.complete} onComplete = {() =>completeTodos(todo.text)  } onDelete = {() =>deleteTodo(todo.text)}/>
                    ))} 
                    {error && <p>Desespérate, hubo un error...</p>}
                    {loading && <p>Estamos cargando,no desesperes...</p>}
                    {(!loading && !searchedTodos.length)&&<p>Crea tu primer TODO!</p>} 
                </TodoList>
                {!!openModal && (
                <Modal>
                    <TodoForm></TodoForm>
                </Modal>
                )}
            <CreateTodoButton setOpenModal = {setOpenModal}/>


            
      </React.Fragment>
    );
}

export {AppUI};