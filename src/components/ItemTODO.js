import React from 'react';
import { BsTrash , BsCheckSquareFill, BsCheckSquare} from "react-icons/bs";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span 
      onClick={props.onComplete}
      >
      {console.log({state: props.onComplete})}
      {props.onComplete && <BsCheckSquare />}
      </span>
      <span 
      onClick={props.onUnComplete}
      >
      {props.onComplete && <BsCheckSquareFill />}
      </span>
      <p>
        {props.name}
      </p>    
      <span   
     
      onClick={props.onDelete}
      >
      <BsTrash />
      </span>
    </li>
  );
}

export { TodoItem };