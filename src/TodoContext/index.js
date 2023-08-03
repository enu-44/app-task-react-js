import React from "react";
import { useLocalStorage } from './useLocalStorage'

const TodoContext = React.createContext()

function TodoProvider({children}) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error } = useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue] = React.useState("");
      const [openModal, setOpenModal] = React.useState(false);

      const completedTodos = todos.filter((a) => !!a.completed).length;
      const totalTodos = todos.length;
    
      const searchedTodos = todos.filter((a) =>
        a.text.toLowerCase().includes(searchValue.toLowerCase())
      );
    
      const completeTodo = (text) => {
        const newTodos = [...todos]
        const findIdex = newTodos.findIndex((todo) => todo.text === text)
        newTodos[findIdex].completed = true
        saveTodos(newTodos)
      };
  
      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          text,
          completed: false,
        });
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        const newTodos = [...todos]
        const findIdex = newTodos.findIndex((todo) => todo.text === text)
        newTodos.splice(findIdex, 1)
        saveTodos(newTodos)
      };
    return (
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            loading, 
            error,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }