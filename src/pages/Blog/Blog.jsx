import React, { useState } from 'react'
import PageHead from '../../components/PageHead'



const Blog = () => {

  const [task, setTask] = useState([])
  let [input, setInput] = useState('')


  const text = (e) => {
    setInput(e.target.value)
    console.log(input)
  }

  function addTasks() {
    if (input.trim() !== '') {
      setTask([...task, input]);
      setInput('')
    }
  }

  function deleteTask(id){
    task.filter(id, index)

  }

  return (
    <>
      <PageHead page_name={"Blog"} />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className=" rounded-xl p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-center">📝 ToDo App</h1>

          {/* Input Area */}
          <div className="flex gap-2 mb-4">
            <input type="text" value={input} onChange={text} className="flex-grow borde rounded px-3 py-2" placeholder="Add a new task..." />
            <button className="bg-black text-white px-4 py-2 rounded" onClick={addTasks} >
              Add
            </button>
          </div>

          <div className='w-full bg'>
            {task.map((elem, id) => {
              return (
                <div className='flex justify-between mx-7 bg-gray-500' key={id}>
                  <li className='' >{elem}</li>
                  <button className='border border-black bg-blue-500 px-5 py-2 ' onClick={deletetask(id)}> Delete</button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog