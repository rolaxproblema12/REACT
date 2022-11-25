import React from 'react';
import { AppUI } from './AppUI';
import {TodoProvider} from '../TodoContext';

// const defaulttodos = [
//   {text : 'Cortar cebolla', complete : false},
//   {text : 'Tomar el curso de intro a React ', complete : false},
//   {text : 'Llorar con la llorona', complete : false},
// ]; 

function App() {
  // console.log('Rendirizando')
  // React.useEffect(()=>{
  //   console.log('use effect');
  // });
  return (
    <TodoProvider ><AppUI></AppUI></TodoProvider>
  );
}

export default App;
