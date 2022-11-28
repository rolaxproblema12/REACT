import React from "react";
import { TodoContext } from '../TodoContext';
import './TodoForm.css';
function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState("");
    const {
        addTodo,
        setOpenModal,

    }=React.useContext(TodoContext);
    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    }
    const onCancel = () => {
        setOpenModal(false);
    };
    const onSummit = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    return (
        <form className="todoForm" onSubmit={onSummit}>

            <textarea className="todoFrom_textArea" onChange={onChange} placeholder="Cortar la cebolla para el almuerzo"></textarea>
            <div>
                <button className="todoForm_button" type="button" onClick={onCancel}>Cancelar</button>
                <button className="todoForm_button" type="submit">Añadir Todo</button>
            </div>
        </form>
    );
}

export {TodoForm};