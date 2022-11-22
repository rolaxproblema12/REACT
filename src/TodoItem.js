import React from 'react';
import './TodoItem.css';
function TodoItem(props){
    return(
        <li className='TodoItem'>
            <span onClick={props.onComplete}>✔</span>
            <p className={`${props.complete && 'RolitasE'}`}>{props.text}</p>
            <span onClick={props.onDelete}>❌</span>
        </li>
    );
}

export {TodoItem};