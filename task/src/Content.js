import { FaTrashAlt } from "react-icons/fa";
import './App.css';


const Content = ({items, handleCheck, handleDelete}) => {

  return (
    <div className="itemsCenter">
      {(items.length) ? (
      <ul>
          {items.map((item) => (
            <li className='itemhandle' key={item.id}>
              <input
              type = "checkbox"
              onClick={() => handleCheck(item.id)}
              checked = {item.checked} 
              />
              <label
              style = {(item.checked) ? {textDecoration: 'line-through'} : null}> {item.item} </label>
              <FaTrashAlt className="trash"
              role = "button"
              onClick={(() => handleDelete(item.id))}
              
              tabIndex = "0"
              />
            </li>
          ))}
      </ul>) : (<p> List is Empyty </p>)
}
    </div>
  )
}

export default Content;