
// import React from 'react'

const ListItem = ({ todos, removeTodo , editTodo }) => {



    return (
        <li className="my-2 p-4 border border-gray-500 shadow-xl flex items-center justify-between">
            <div>
                <p className="text-sm text-gray-400">{todos.id}</p>
                <h1 className="text-xl font-bold ">{todos.text}</h1>
            </div>
            <div >
                <button onClick={() => editTodo(todos)} className="p-2 bg-yellow-500 hover:bg-yellow-600 mx-1 font-bold text-sm">Edit</button>
                <button onClick={() => removeTodo(todos.id)} className="p-2 bg-red-500 hover:bg-red-600 mx-1 font-bold text-sm">Delete</button>
            </div>
        </li>
    )
}

export default ListItem