import React from 'react'
import { FaPlus } from 'react-icons/fa'
import './App.css';

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  return (
    <form className='form' onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='addItem'>Add Item</label>


        <input type='text' autoFocus placeholder='Add Tasks' required
        value={newItem}
        onChange = {(e) => setNewItem(e.target.value)}
        />


        <button type='submit'>
            <FaPlus />
        </button>


    </form>
  )
}

export default AddItem;