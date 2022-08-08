import React , {useState}from "react";
const TodoContext = React.createContext();

function TodoProvider(props){

    const [todos, setStateTodos] = useState([{name: 'Tara 1', desc: 'tarea de prueba', state: false}])
    /**    
     * name
     * desc
     * state */ 
    const [openModal, setOpenModal] = React.useState(false);
    const completeTODO = (name)=>{
        const index = todos.findIndex(todo => todo.name === name);
        const newTodos = [...todos];
        newTodos[index].state = true;
        setStateTodos(newTodos);        
    
    };        
    const updateTODO = (oldTODO, newTODO)=>{
        const index = todos.findIndex(todo => todo.desc === oldTODO.desc && oldTODO.name === newTODO.name);
        const newTodos = [...todos];
        newTodos[index] = newTODO;
        setStateTodos(newTodos);        
    
    };        
      const unCompleteTODO = (name) => {
        const todoIndex = todos.findIndex(todo => todo.name === name);
        const newTodos = [...todos];
        newTodos[todoIndex].state = !newTodos[todoIndex].state;
        //setStateTodos(newTodos);
        setStateTodos(newTodos);
      }  
    /**
     * Elimina el TODO especificado
     * @param {*} todoText 
     */
      const deleteTODO = (name)=>{    
        const index = todos.findIndex(todo => todo.name === name);
        const newTodos = [...todos];
        //Sacar el todo que se desea eliminar
        newTodos.splice(index,1);
        //setStateTodos(newTodos);
        setStateTodos(newTodos);
      }
      const addTODO = (name, desc, state)=>{    
        const newTodos = [...todos];
        //Sacar el todo que se desea eliminar
        newTodos.push({name, desc, state});
        //setStateTodos(newTodos);
        setStateTodos(newTodos);
      }
    

    return(
        <TodoContext.Provider value={{              
            todos,
            completeTODO,            
            deleteTODO,
            updateTODO,
            unCompleteTODO,
            addTODO,
            setOpenModal,
            openModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}