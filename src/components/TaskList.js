import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Link } from 'react-router-dom'

const TaskList = () => {
  const { tasks, deleteTask, toggleTaskDone } = useContext(GlobalContext)

  return (
    <div className="flex justify-center">
      {/*     <button onClick={()=>deleteTask()}>Delete All</button> */}
      <div className="w-6/12">
        {tasks.map((task) => (
          <div
            className="bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4 flex justify-between"
            key={task.id}
          >
            <div>
              <h1>{task.title}</h1>
              <h6>{task.id}</h6>
              <p>{task.description}</p>
              <button
                className="bg-purple-600 hover:bg-purple-500 py-1 px-3 mt-2"
                onClick={() => toggleTaskDone(task.id)}
              >
                {task.done ? 'Undene' : 'done'}
              </button>
            </div>
            <div>
              <Link to={`/edit/${task.id}`}>
                <button className="bg-gray-600 hover:bg-gray-500 py-2 px-4 mr-2">
                  Edit
                </button>
              </Link>
              <button
                className="bg-red-600 hover:bg-red-500 py-2 px-4 mr-2"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskList
