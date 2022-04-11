import React from 'react'
import TodoListItem from '../TodoListItem/TodoListItem'
import './TodoList.css'

const TodoList=({todos, onDeleted, onToggleImportant, onToggleDone})=>{

    const elements = todos.map((item)=>{
        const {id , ...itemProps} = item;

        return(
            <li key={item.id}
             className='list-group-item'>
                <TodoListItem 
                {...itemProps} 
                onDeleted={()=>onDeleted(id)}
                // label={item.label}
                // important={item.important}
                onToggleImportant={()=>onToggleImportant(id)}
                onToggleDone={()=>onToggleDone(id)}
                />
            </li>
        )
    })

    return(
        <div className='list'>
            <ul className="list-group">
                {elements}
            </ul>
            
        </div>
    )
}

export default TodoList