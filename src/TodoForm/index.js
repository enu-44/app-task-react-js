import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const {
        addTodo,
        setOpenModal

    } = React.useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onSubmit = (event) => {
        event.preventDefault(); //Evita que se recargue la pagina
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = (event) => {
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label> Excribe tu nuevo TODO</label>
            <textarea placeholder="Cortar cebolla para el almuerzo" value={newTodoValue} onChange={onChange} />
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>Cancelar</button>
                <button className="TodoForm-button TodoForm-button--add" >Agregar</button>
            </div>
        </form>
    )
}

export { TodoForm }