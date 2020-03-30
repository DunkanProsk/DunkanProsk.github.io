import React from 'react';
import TodoItem from './TodoItem';

const styles = {
    body__ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    },
};

export default function TodoList(props) {
    return (
        <ul style={styles.body__ul}>
            {props.todo.map((todo, index) => {
                return <TodoItem 

                        removeTodo={props.removeTodo}
                        todo={todo}
                        key={todo.id}
                        index={index}
                        onChange={props.onToggle}
                    />
            }) }
        </ul>
    );
};