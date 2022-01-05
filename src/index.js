import React from 'react';
import ReactDOM from 'react-dom';
import "react-bootstrap/dist/react-bootstrap.min.js";
import { ToDoApp } from './components/useReducer/ToDoApp';
// import { HooksApp } from './HooksApp';
// import CounterApp from './components/useState/CounterApp';
// import CounterWithCustomHook from './components/useState/CounterWithCustomHook';
// import { SimpleForm } from './components/useEffect/SimpleForm';
// import { FormWithCustomHook } from './components/useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './components/examples/MultipleCustomHooks';
// import { FocusScreen } from './components/useRef/FocusScreen';
// import { RealExampleRef } from './components/useRef/RealExampleRef';
// import { LayoutEffect } from './components/useLayoutEffect/LayoutEffect';
// import { Memorize } from './components/Memos/Memorize';
// import { MemoHook } from './components/Memos/MemoHook';
// import { CallbackHook } from './components/Memos/CallbackHook';
// import { Padre } from './components/tarea-memo/Padre';

ReactDOM.render(
  <React.StrictMode>
    <ToDoApp />
  </React.StrictMode>,
  document.getElementById('root')
);
