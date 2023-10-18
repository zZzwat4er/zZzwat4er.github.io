import { useState } from 'react';
import './App.css';
import { TodoItem } from './components/TodoItem';
import TodoState, { LoadingStates } from './states/TodoState.ts';
import Todo from './models/Todo';

function App() {

  let [state, setState] = useState(new TodoState(LoadingStates.init, []));

  if (state.state === LoadingStates.init) {
    setState(new TodoState(LoadingStates.loading, state.todos));
    fetch('https://odd-tan-ox-wig.cyclic.app/tasks')
      .then(res => {
        console.log(res.status);
        console.log(res.statusText);
        return res.json()
      })
      .then(json => {
        setState(new TodoState(LoadingStates.done, json.map(e => Todo.from(e))))
      })
      .catch(e => setState(new TodoState(LoadingStates.error, [])));
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