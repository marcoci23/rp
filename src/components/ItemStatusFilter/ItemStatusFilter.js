import React from 'react'
import './ItemStatusFilter.css'

export default class ItemStatusFilter extends React.Component {

render(){
    return(
        <div className='btn-group status-group'>
            <button className='btn btn-dark'>All</button>
            <button className='btn btn-dark'>Active</button>
            <button className='btn btn-dark'>Done</button>
        </div>
    )
}

}
