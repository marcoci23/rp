import React from 'react'
import './TodoListItem.css'

export default class TodoListItem extends React.Component {

    // constructor(){
    //     super();

    //     this.onLabelClick = () =>{
    //         console.log(`Done: ${this.props.label}`)
    //     }
    // }

    // constructor(){
    //     super();
    //     this.state = {
    //         done: false
    //     }
    // }

    render(){
        const {label,onDeleted,onToggleImportant,onToggleDone,done,important} = this.props;
        let classNames = 'todo-list-item';
        if(done) {
            classNames += ' done';
        }
        if(important){
            classNames += ' important'
        }
        return(
           <span className={classNames}>
               <button 
               className='btn btn-outline-danger'
               onClick={onDeleted}
               ><i class="bi bi-trash-fill"></i></button>

                <button 
                className='btn btn-outline-danger'
                onClick={onToggleImportant}
                ><i className="bi bi-exclamation-lg"></i></button>
                
                <span 
                onClick={onToggleDone}
                className='list-item todo-list-item' 
                >
                {label}
            </span>
           </span>
        )
    }

}



