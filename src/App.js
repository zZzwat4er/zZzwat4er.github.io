import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useThemeParams } from '@vkruglikov/react-telegram-web-app';
import './App.css';

import { TodoItem } from './components/TodoItem';
import Todo from './models/Todo';
import { useAuthContext } from './hooks/useAuthContext';

export const todoContext = createContext();

function App() {

  let [state, setState] = useState([]);
  let { user, _ } = useAuthContext();
  let [sheme, themeParams] = useThemeParams();

  useEffect(() => {
    async function fetchTasks() {
      const users = await axios.get(`https://odd-tan-ox-wig.cyclic.app/users/`)
        .catch(e => setState([]));
      const usersJson = await users.data;
      const currentUser = usersJson.filter(e => e.telegramid === user.id);
      if (currentUser.length === 0) {
        const uid = currentUser[0].userid;
        const tasks = await axios.get(`https://odd-tan-ox-wig.cyclic.app/tasks/`)
          .catch(e => setState([]));
        const tasksJson = await tasks.data
        let finalTasks = tasksJson.filter(e => e.userid === uid)
        setState(finalTasks.map(e => Todo.from(e)));
      }
    }

    if (user?.id) {
      fetchTasks();
    }
  }, []);



  return (
    <div className="App" style={
      {
        backgroundColor: themeParams.bg_color,
        textDecorationColor: themeParams.text_color
      }
    }>
      <todoContext.Provider value={setState}>
        {user ? <div>
        {state.map((todo) => <TodoItem todo={todo} />)}
        </div>
          :
          <h1>Could not get user ID</h1>
        }
      </todoContext.Provider>
    </div>
  );
}

export default App;