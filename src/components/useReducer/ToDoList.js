import React from 'react'
import { ToDoItem } from './ToDoItem'

export const ToDoList = ({toDoList, handleToggle, handleDelete}) => {
  return (
    <ul className='list-group list-group-flush'>
      {
        toDoList.map((toDo,i) => (
          <ToDoItem key={toDo.id} toDo={toDo} index={i} handleToggle={handleToggle} handleDelete={handleDelete} />
        ))
      }
    </ul>
  )
}
