import React from 'react';
import "./TodoSearch.css";
function TodoSearch({searchValue,setsearchValue}){
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