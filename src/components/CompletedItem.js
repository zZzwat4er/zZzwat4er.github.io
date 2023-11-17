import React, { useState, useContext } from 'react'
import axios, { HttpStatusCode } from 'axios';
import { todoContext } from '../App';
import { useAnalytics } from '../hooks/useAnalytics';
import { logEvent } from "firebase/analytics";

export function CompletedItem({ todo, fetchTasks }) {
  const sender = todo.senderUrl ? "\n Sender: " + todo.senderUrl : '';
  const msg = todo.message + sender;

  let setTodo = useContext(todoContext)
  const { analytics } = useAnalytics();

  function makeActiveSubmit() {
    axios
      .put(`https://odd-tan-ox-wig.cyclic.app/tasks/${todo.taskId}`, {
        status: "NOT DONE",
        message: todo.message,
        reminder: todo.reminder,
      })
      .then((res) => {
        if (res.status !== HttpStatusCode.InternalServerError) {
          fetchTasks();
        }
      })
      .catch((e) => {});
  }

  function deleteCompletedSubmit() {
    axios
      .delete(`https://odd-tan-ox-wig.cyclic.app/tasks/${todo.taskId}`)
      .then((res) => {
        if (res.status !== HttpStatusCode.InternalServerError) {
          fetchTasks();
        }
      })
      .catch((e) => {});
  }

  return (
    <div className='Todo-Item'>
        <ul >
          <li className='Main-Text'>{msg}</li>
          <li>
            <div className='Edit-Options'>
              <li onClick={makeActiveSubmit}>&#128260;</li>
              <li onClick={deleteCompletedSubmit}>&#10060;</li>
            </div>
          </li>
        </ul>
    </div>
  )
}
