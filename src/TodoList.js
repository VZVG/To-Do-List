import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggleComplete, onDeleteTodo }) {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    onToggleComplete={() => onToggleComplete(index)}
                    onDelete={() => onDeleteTodo(index)}
                />
            ))}
        </ul>
    );
}

export default TodoList;
