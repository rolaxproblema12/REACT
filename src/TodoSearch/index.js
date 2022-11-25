import React from 'react';
import { TodoContext } from '../TodoContext';
import "./TodoSearch.css";
function TodoSearch(){
    const {searchValue,setsearchValue} = React.useContext(TodoContext);
    const onSerch = (event) =>{
        setsearchValue(event.target.value)
        console.log(event.target.value);

    }
    return(

    <input 
        onChange={onSerch}
        value ={searchValue}
        className='TodoSearch' 
        placeholder='cebolla'>
    </input>
    )

}
export {TodoSearch};