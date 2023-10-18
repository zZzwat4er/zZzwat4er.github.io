import React, { Component } from 'react'
import Todo from '../models/Todo'

export function TodoItem({ todo }) {
    return (
      <div className='Todo-Item'>
        <ul >
            <li className='Main-Text'>{todo.message}</li>
            <li className='Status'>{todo.status}</li>
        </ul>
      </div>
    )
}
