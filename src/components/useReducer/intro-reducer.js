console.log("INTRO")

const initialState = [{
  id: 1,
  todo: 'Make the bed',
  done: false
}];

const toDoReducer = (state = initialState, action) => {
  if(action?.type === 'add'){
    return [...state, action.payLoad];
  }
  return state;
}

let toDoList = toDoReducer();

const newToDo = {
  id: 2,
  todo: 'Buy Milk',
  done: false
};

const action = {
  type: 'add',
  payLoad: newToDo
};

toDoList = toDoReducer(toDoList, action);

console.log(toDoList);