import React, { useState } from 'react'
import PageHead from '../../components/PageHead'

const Todo = () => {
  const [task, setTask] = useState([])
  const [input, setInput] = useState('')

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const addTasks = () => {
    if (input.trim() !== '') {
      setTask([...task, input])
      setInput('')
    }
  }

  const deleteTask = (id) => {
    const updatedTasks = task.filter((_, index) => index !== id)
    setTask(updatedTasks)
  }

  return (
    <>
      <PageHead page_name={"Todo App"} />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="rounded-xl p-6 w-full max-w-md bg-white shadow-md">
          <h1 className="text-2xl font-bold mb-4 text-center">📝 ToDo App</h1>

          <div className="flex flex-col sm:flex-row gap-2 mb-4">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              className="flex-grow border border-gray-300 rounded px-3 py-2"
              placeholder="Add a new task..."
            />
            <button className="bg-black text-white px-4 py-2 rounded" onClick={addTasks}>
              Add
            </button>
          </div>

          <ul className="space-y-2">
            {task.map((elem, id) => (
              <li key={id} className="flex justify-between items-center bg-gray-200 px-4 py-2 rounded">
                <span>{elem}</span>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  onClick={() => deleteTask(id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Todo;
