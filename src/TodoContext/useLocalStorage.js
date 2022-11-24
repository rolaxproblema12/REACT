import React from "react";

function useLocalStorage(itemName,initialValue) {
    const [loading, setloading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);
    React.useEffect(() => {
      setTimeout(() => {
        try{
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          if(!localStorageItem)
          {
            localStorage.setItem(itemName,JSON.stringify(initialValue))
            parsedItem = initialValue;
          }
          else
            {
              parsedItem = JSON.parse(localStorageItem);
            }
            setItem(parsedItem);
            setloading(false);
        }catch(e) {
          setError(e);
        }
      }, 1000);
    });
      const saveItem = (newItem) => {
        try{
          const stringifiedItem = JSON.stringify(newItem);
          localStorage.setItem(itemName,stringifiedItem);
          setItem(newItem);
        }catch(e){
          setError(e)
        }
      }
      return {item,saveItem,loading,error};
  }

export {useLocalStorage};