import { useEffect, useState } from "react"

const Form = ({ addTodo, edit, updatedTodo }) => {

    // console.log(edit);


    const [input, setInput] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()

        !edit.isEdit ?
            addTodo({
                id: crypto.randomUUID(),
                text: input
            }) : updatedTodo({
                id: edit.todo.id,
                text: input
            })

        setInput("")
    }

    useEffect(() => {
        setInput(edit.todo.text)
    }, [edit])

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="p-4 border border-gray-400 shadow-sm">
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Enter Todo" className="p-2 border border-gray-500 w-full" />
            <button className="w-full bg-green-500 hover:bg-green-600 cursor-pointer p-2 my-4 text-white font-bold">Save</button>
        </form>
    )
}
export default Form