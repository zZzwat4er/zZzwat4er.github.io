import {TodoItem} from "../components/TodoItem";
import {CompletedItem} from "../components/CompletedItem";
import React, {useEffect, useState} from "react";
import {useAuthContext} from "../hooks/useAuthContext";
import axios from "axios";
import Todo from "../models/Todo";

export function Home() {
  let [state, setState] = useState([]);
  let {user, _} = useAuthContext();
  let [isCompletedShow, setIsCompletedShow] = useState(false);
  let [isAddModalOpen, setIsAddModalOpen] = useState(false);
  let [newTask, setNewTask] = useState('');

  const toggleShow = async () => {
    setIsCompletedShow(!isCompletedShow);
    await fetchTasks();
  }

  const fetchTasks = async () => {
    try {
      const tasks = await axios.get(`https://odd-tan-ox-wig.cyclic.app/tasks/telegram/${user.id}`);
      const tasksJson = tasks.data;
      tasksJson.sort((a, b) => new Date(a.creationDate) - new Date(b.creationDate));
      setState(tasksJson.map(e => Todo.from(e)));
    } catch (error) {
      setState([]);
    }
  };

  useEffect(() => {
    if (user?.id) {
      fetchTasks();
    }
  }, [user?.id]);

  const openAddModal = () => {
    setIsAddModalOpen(true);
  }

  const closeAddModal = () => {
    setIsAddModalOpen(false);
    setNewTask('');
  }

  const confirmAddModal = async () => {
    if (newTask.trim() !== '') {
      try {
        await axios.post(`https://odd-tan-ox-wig.cyclic.app/tasks`, {
          message: newTask,
          status: 'NOT DONE',
          senderurl: null,
          userid: user.id
        });
        await fetchTasks();
        closeAddModal();
      } catch (error) {
        console.error('Error creating task:', error);
      }
    }
  }

  // Check if there are active tasks
  const hasActiveTasks = state.some((todo) => todo.status === 'NOT DONE');

  // Check if there are completed tasks
  const hasCompletedTasks = state.some((todo) => todo.status === 'DONE');

  return (
    <div>
      {/* Floating button for adding new tasks */}
      <div className="FloatingButton" onClick={openAddModal}>
        +
      </div>

      {/* Add Task Modal */}
      {isAddModalOpen && (
        <div className="AddModal">
          <textarea
            placeholder="Enter your message..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <div className="ModalButtons">
            <button className="Cancel" onClick={closeAddModal}>Cancel</button>
            <button onClick={confirmAddModal}>Confirm</button>
          </div>
        </div>
      )}

      <button className="Show" onClick={toggleShow}>
        {isCompletedShow ? "Show Active Tasks" : "Show Completed Tasks"}
      </button>
      {isCompletedShow ? (
          <div className="Completed">
          {hasCompletedTasks ? (
            state
              .filter((todo) => todo.status === 'DONE')
              .map((todo) => <CompletedItem key={todo.taskId} todo={todo} fetchTasks={fetchTasks} />)
          ) : (
            <p>No completed tasks</p>
          )}
          </div>
      ) : (
        <div>
          {user ? (
            <div>
              {hasActiveTasks ? (
                state
                  .filter((todo) => todo.status === 'NOT DONE')
                  .map((todo) => <TodoItem key={todo.taskId} todo={todo} fetchTasks={fetchTasks} />)
              ) : (
                <p>No active tasks</p>
              )}
            </div>
          ) : (
            <h1>Could not get user ID</h1>
          )}
        </div>
      )}
    </div>
  );
}
