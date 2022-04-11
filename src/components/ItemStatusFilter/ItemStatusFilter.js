import React from 'react'
import './ItemStatusFilter.css'

export default class ItemStatusFilter extends React.Component {


    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ]
render(){
    const {filter,name,onFilterChange} = this.props
    const buttons = this.buttons.map(({name,label})=>{
    return(
        <button 
        className='btn btn-align status-group' 
        onClick={()=>onFilterChange(name)}
        key={name}
        >{label}</button>
    )
    })

    const isActive = filter == name
    const classs=isActive ? 'btn-dark' : 'btn'

    return(
        <div className='btn-filter'>
            <div className= {classs}>
        {buttons}
    </div></div>
    )
}

}
