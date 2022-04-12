import React from 'react'
import './ItemAddForm.css'

export default class ItemAddForm extends React.Component{

    state = {
        label: '',

    }

    onLabelChange=(e)=>{
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.onItemAdded(this.state.label)
        this.setState({
            label: ''
        })
    }

    render(){
        return(
            <form className='item-add-form d-flex'
            onSubmit={this.onSubmit}
            >

                <input type="text" className='form-control input-form '
                onChange={this.onLabelChange}
                value={this.state.label}
                ></input>
                <button className='btn  btn-outline-secondary'
                
                >Add Item</button>
            </form>
        )
    }
}