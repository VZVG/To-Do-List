import React from 'react';

function TodoItem({ todo, onToggleComplete, onDelete }) {
    return (
        <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span>{todo.text}</span>
            <button onClick={onToggleComplete}>
                {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={onDelete}>Delete</button>
        </li>
    );
}

export default TodoItem;
