import React, { useEffect, useReducer } from 'react';
import '../../styles/style.css';
import { ToDoAdd } from './ToDoAdd';
import { ToDoList } from './ToDoList';
import { toDoReducer } from './toDoReducer';

const init  = () => {
  return JSON.parse(localStorage.getItem('toDoList')) || [];
}

export const ToDoApp = () => {
  const [toDoList, dispatch] = useReducer(toDoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
  }, [toDoList]);

  const handleDelete = (toDoId) => {
    const action = {
      type: 'delete',
      payload: toDoId
    }
    dispatch(action);
  }

  const handleToggle = (toDoId) => {
    const action = {
      type: 'toggle',
      payload: toDoId
    }
    dispatch(action);
  }

  const handleAddToDo = (newToDo) => {
    const action = {
      type: 'add',
      payload: newToDo
    }
    dispatch(action);
  }

  return (
    <div>
      <h1>To Do App ({toDoList.length})</h1>
      <hr/>
      <div className='row'>
        <div className='col-7'>
          <h4>To Do</h4>
          <hr />
          <ToDoList key={1} toDoList={toDoList} handleToggle={handleToggle} handleDelete={handleDelete} />
        </div>
        <div className='col-5'>
          <h4>Add To Do</h4>
          <hr />
          <ToDoAdd handleAddToDo={handleAddToDo}/>
        </div>
      </div>
    </div>
  )
}
