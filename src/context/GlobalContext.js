import { createContext, useReducer } from 'react'
import appReducer from './AppReducer'
import { v4 } from 'uuid'

const initialState = {
  tasks: [
    {
      id: '1',
      title: 'title one',
      description: 'some description',
      done: 'false',
    },
    {
      id: '2',
      title: 'title two',
      description: 'some description two ',
      done: 'false ',
    },
  ],
}

export const GlobalContext = createContext(initialState)

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const addTask = (task) => {
    console.log(task)
    dispatch({ type: 'ADD_TASK', payload: { ...task, id: v4(),done:false } })
  }

  const deleteTask = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id })
  }

  const updatedTask = (task) => {
    dispatch({ type: 'UPDATE_TASK', payload: task })
  }

  const toggleTaskDone = (id) => dispatch({ type: 'TOGGLE_TASK_DONE', payload: id })
  return (
    <GlobalContext.Provider
      value={{ ...state, addTask, deleteTask, updatedTask, toggleTaskDone }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
