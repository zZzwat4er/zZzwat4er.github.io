import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import { TodoItem } from './components/TodoItem';
import Todo from './models/Todo';
import { useAuthContext } from './hooks/useAuthContext';

function App() {

  let [state, setState] = useState([]);

  useEffect(() => {
    axios.get('https://odd-tan-ox-wig.cyclic.app/tasks')
      .then(res => {
        return res.data;
      })
      .then(json => {
        setState(json.map(e => Todo.from(e)));
      })
      .catch(e => setState([]));
  }, []);

  let {user, _} = useAuthContext();

  return (
    <div className="App">
      <div>
        <h1>{user?.id ?? 'null'}</h1>
        {state.map((todo) => <TodoItem todo={todo} />)}
      </div>
    </div>
  );
}

export default App;