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
               className='btn'
               onClick={onDeleted}
               >Delete</button>

                <button 
                className='btn'
                onClick={onToggleImportant}
                >!</button>
                
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


