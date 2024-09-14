import { useState } from 'react'
import './App.css'
import Input from "./components/Input/Input.jsx";
import Button from "./components/Button/Button.jsx";
import DeleteIcon from "./components/DeleteIcon/DeleteIcon.jsx";
import EditIcon from "./components/EditIcon/EditIcon.jsx";

function App() {

    const [value, setValue] = useState('');
    const [todos, setTodos] = useState([]);
    const addTodo = (e) => {
        e.preventDefault()
        const trimValue = value.trim()
        if (trimValue !== '') {
            setTodos([...todos, trimValue]);
            setValue('');
        }
    }
    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }
    const editTodo = (index) => {
        if (value === '') {
            const newTodos = [...todos];
            setValue(newTodos[index]);
            todos.splice(index, 1)
        }
    }
  return (
    <div className={'todo'}>
        <h1>TO-DO LIST</h1>
      <form onSubmit={addTodo} className={'inputWrapper'}>
        <Input
            value={value}
            placeholder={'What you want to do'}
            onChange={(e) => {
            setValue(e.target.value)
        }}/>
        <Button text={'ADD'} />
      </form>
      <ul className={'todoList'}>
          {todos.map((value, index) => (
              <div className={'todos'}>
                  <li key={index}>{value}</li>
                  <div>
                      <button className={'todoBtn'} onClick={() => editTodo(index)}>
                          <EditIcon />
                      </button>
                      <button className={'todoBtn'} onClick={() => deleteTodo(index)}>
                          <DeleteIcon />
                      </button>
                  </div>
              </div>
          ))}
      </ul>
    </div>
  )
}
export default App
