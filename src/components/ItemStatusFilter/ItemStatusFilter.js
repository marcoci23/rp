import React from 'react'
import './ItemStatusFilter.css'

export default class ItemStatusFilter extends React.Component {


  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' }
  ]
  render() {
    const { filter, onFilterChange } = this.props
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter == name
      const classs = isActive ? 'btn-dark' : 'btn-outline-secondary'
      return (
        <button
          className={`btn btn-align ${classs}`}
          onClick={() => onFilterChange(name)}
          key={name}
        >{label}</button>
      )
    })

    return (
      <div className='btn-filter'>

        {buttons}
      </div>
    )
  }

}
