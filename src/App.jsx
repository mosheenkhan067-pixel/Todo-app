import Form from "./components/Form"
import Navbar from "./components/Navbar"
import ListGroup from "./components/ListGroup"
import { useState } from "react"

const App = () => {

    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "Do something...."
        },
        {
            id: 2,
            text: "Do something More...."
        },
        {
            id: 3,
            text: "Do something Again...."
        }
    ])

    const [edit, setEdit] = useState({
        todo: {},
        isEdit: false

    })

    const [theme, setTheme] = useState(false)



    const changeTheme = () => {
        setTheme(!theme)
    }

    const clearAllTodo = () => {
        // console.log("cleared")
        setTodos([])
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(todos => todos.id !== id))
    }

    const addTodo = (todo) => {
        setTodos([todo, ...todos])
    }

    const editTodo = (todo) => {
        setEdit({
            todo: todo,
            isEdit: true

        })
    }

    
    const updateTodo = (updated) => {
        setTodos(todos.map((todo) => {
            if (todo.id === updated.id) {
                return updated
            }else{
                return todo
            }
        }))

        setEdit({todo: {}, isEdit: false  })
    }


    return (

        <>
            <Navbar theme={theme} changeTheme={changeTheme} />

            <div className={theme ? "p-8 bg-gray-800 text-gray-300" : "p-8"}>
                <Form addTodo={addTodo} edit={edit} updateTodo={updateTodo} />
                <ListGroup todos={todos} clearAllTodo={clearAllTodo} removeTodo={removeTodo} editTodo={editTodo} />
            </div>
        </>
    )
}

export default App