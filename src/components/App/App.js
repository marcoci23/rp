import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import TodoList from '../TodoList/TodoList';
import ItemAddForm from '../ItemAddForm/ItemAddForm';


export default class App extends React.Component {
   
  maxId = 100;

  state = {

    todoData : [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Have a lunch'),
      // {label: "Drink Coffee", id:1},
      // {label: "Have a lunch", id:2}
    ]

   }
  
   createTodoItem(label){
     return{
       label,
       important: false,
       done: false,
       id: this.maxId++
     }
   }

   deleteItem = (id) =>{
      
    this.setState(({todoData})=>{

        const idx = todoData.findIndex((el)=> el.id == id);
        
        const newArray = [...todoData.slice(0,idx), ...todoData.slice(idx+1)]
    
        return {
          todoData: newArray
        }
      }
    
    )

   }

   addItem = (text) =>{

    const newItem =  this.createTodoItem(text)
      // const newItem = {
      //   label: text,
      //   important: false,
      //   id: this.maxId++
      // }
      
      this.setState(({todoData})=>{
        
        const newArr = [...todoData , newItem]

        return {
          todoData: newArr
        }

      })
  }

      onToggleImportant = (id) =>{

        this.setState(({todoData})=>{
          const idx = todoData.findIndex((el)=> el.id == id);

          const oldItem = todoData[idx];
          const newItem = {...oldItem, important:!oldItem.important};

          const newArray = [
            ...todoData.slice(0,idx),
            newItem,
            ...todoData.splice(idx+1)
          ]

          return{
            todoData: newArray
          }
        })
          console.log("important", id)
      }
      

      onToggleDone = (id) =>{

        this.setState(({todoData})=>{
          const idx = todoData.findIndex((el)=> el.id == id);

          const oldItem = todoData[idx];
          const newItem = {...oldItem, done:!oldItem.done};

          const newArray = [
            ...todoData.slice(0,idx),
            newItem,
            ...todoData.splice(idx+1)
          ]

          return{
            todoData: newArray
          }
        })
          console.log("done" , id)
      }

  render(){

        const {todoData} = this.state
        const doneCount = todoData.filter((el)=>el.done).length
        const todoCount = todoData.length - doneCount
        return (
          <div className="App">
            <AppHeader toDo={todoCount} done={doneCount}/>
            <TodoList 
            todos = {todoData}
            onDeleted={this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
            />
            <ItemAddForm onItemAdded={this.addItem}/>
          </div>
        );
    }
}





