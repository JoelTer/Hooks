import React from 'react'
import { useForm } from '../../hooks/useForm';

export const ToDoAdd = ({handleAddToDo}) => {

  const [{description}, handleInputChange, resetValues] = useForm({
    description:''
  });

  const handleSubmit = (e) => {
    if(description.trim().length <= 1){
      return;
    }
    e.preventDefault();
    const newToDo ={
      id: new Date().getTime(),
      desc: description,
      done: false
    }
    handleAddToDo(newToDo);
    resetValues();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name="description"
        className='form-control'
        placeholder="Learn..."
        autoComplete='off'
        value={description}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className='btn btn-outline-primary bn-sm btn-block mt-2'
      >Save</button>
    </form>
  )
}
