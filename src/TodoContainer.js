import React from 'react';
import './TodoContainer.css';
import Todo from './Todo';

function TodoContainer({todos}) {
    return (
        <div className='todoContainer'>
            {todos.map(todo => (
                <Todo title={todo} />
            ))}
        </div>
    )
}

export default TodoContainer
