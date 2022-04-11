import React from 'react'
import './AppHeader.css'


const AppHeader = ({toDo , done})=>{
    return(
        <div >
            <div className='header'><h1 className='title'>ToDo App</h1>
            <span>{toDo} more to do , {done} done</span></div>
            <div className='app-header'>
            
            
            </div>
        </div>
    )
}

export default AppHeader