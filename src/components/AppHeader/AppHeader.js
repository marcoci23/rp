import React from 'react'
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter'
import SearchPanel from '../SearchPanel/SearchPanel'
import './AppHeader.css'

const AppHeader = ({toDo , done})=>{
    return(
        <div >
            <div className='header'><h1 className='title'>ToDo App</h1>
            <span>{toDo} more to do , {done} done</span></div>
            <div className='app-header'>
            <SearchPanel/>
            <ItemStatusFilter/>
            </div>
        </div>
    )
}

export default AppHeader