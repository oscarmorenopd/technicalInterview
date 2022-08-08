import React, { useContext } from 'react';
import { TodoContext } from '../context';
import { TodoItem } from './ItemTODO';
export function Todos() {

    const {
        todos,
        completeTODO,            
        deleteTODO,
        updateTODO,
        unCompleteTODO,
      } = React.useContext(TodoContext);    return (
        <ul>
            {todos.map(todo => (
                <TodoItem
                    key={todo.name} 
                    name={todo.name}
                    completed = {todo.state}
                    onComplete={()=>completeTODO(todo.name)}
                    onDelete={()=>deleteTODO(todo.name)}
                    onUnComplete={()=>unCompleteTODO(todo.name)}                
                />                
            ))}                    
        </ul>
    )
}
