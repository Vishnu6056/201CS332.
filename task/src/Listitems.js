import Content from './Content';
import React, { useState } from 'react'
import Footer from './Footer';
import AddItem from './AddItem';
import './App.css';

const Listitems = () => {
    
const [items, setItems] = useState([
    // {
    //   id : 1,
    //   checked : true,
    //   item: "Happy Coding"
    // },
    // {
    //   id : 2,
    //   checked : true,
    //   item: "Happy Coding"
    // },
    // {
    //   id : 3,
    //   checked : false,
    //   item: "Happy Coding"
    // }
  ]);

  const handleCheck = (id) =>{
      const newArray = items.map((item) => id === item.id ? {...item, checked : !item.checked } : item)
      setItems(newArray);
      localStorage.setItem("todo_list", JSON.stringify(newArray));
  }

  const handleDelete = (id) =>{
    const newArray1 = items.filter((item) => item.id !== id);
    setItems(newArray1);
    
    localStorage.setItem("todo_list", JSON.stringify(newArray1));
}


const [newItem, setNewItem] = useState('');

const addItem = (item) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1 ;
  const addNewItem = {id, checked:false, item};
  const newArray2 = [...items, addNewItem];
  setItems(newArray2)
  localStorage.setItem("todo-list", JSON.stringify(newArray2));
}

const handleSubmit = (e) => {
  e.preventDefault();
  if(!newItem) return ;
  console.log(newItem);
  addItem(newItem);
  setNewItem('');
}



  return (
    <div>
        <Content 
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
        />
        
       <AddItem 
      newItem = {newItem}
      setNewItem = {setNewItem}
      handleSubmit = {handleSubmit}
      />
        <Footer
        length = {items.length}
        />
    </div>
  )
}

export default Listitems;