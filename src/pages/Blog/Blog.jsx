import React from 'react'
import PageHead from '../../components/PageHead'



const Blog = () => {
  return (
    <>
    <PageHead page_name={"Blog"}/>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">📝 ToDo App</h1>

        {/* Input Area */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            className="flex-grow border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            placeholder="Add a new task..."
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add
          </button>
        </div>

        {/* Todo List */}
        <ul className="space-y-2">
          <li className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded">
            <span className="cursor-pointer">Sample Task</span>
            <button className="text-red-500 hover:text-red-700">✕</button>
          </li>
          <li className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded">
            <span className="line-through text-gray-400 cursor-pointer">
              Completed Task
            </span>
            <button className="text-red-500 hover:text-red-700">✕</button>
          </li>
          {/* Add more list items as needed */}
        </ul>
      </div>
    </div>
    </>
  )
}

export default Blog