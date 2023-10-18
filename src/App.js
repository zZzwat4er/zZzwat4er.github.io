import { useState } from 'react';
import './App.css';
import { TodoItem } from './components/TodoItem';
import TodoState from './states/TodoState.ts';
import Todo from './models/Todo';
import {State} from './states/States.ts';
import TgState from './states/TgState.ts';

function App() {

  let [state, setState] = useState(new TodoState(State.init, []));

  if (state.state === State.init) {
    setState(new TodoState(State.loading, state.todos));
    console.log(TgState.initState());
    fetch('https://odd-tan-ox-wig.cyclic.app/tasks')
      .then(res => {
        console.log(res.status);
        console.log(res.statusText);
        return res.json()
      })
      .then(json => {
        setState(new TodoState(State.done, json.map(e => Todo.from(e))))
      })
      .catch(e => setState(new TodoState(State.error, [])));
  }
  // console.log(state.todos);
  return (
    <div className="App">
      <div>
        {state.todos.map((todo) => <TodoItem todo={todo} />)}
      </div>
    </div>
  );
}

export default App;