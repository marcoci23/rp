import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import TodoList from '../TodoList/TodoList';
import ItemAddForm from '../ItemAddForm/ItemAddForm';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';


export default class App extends React.Component {
   
  maxId = 1;

  state = {

    todoData : [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Have a lunch')
    ],
    filter: 'all'
    
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
        
        const newArr = [...todoData, newItem ]

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

      filter(items,filter){
        switch(filter){
          case 'all':
            return items;
          case 'active':
            return items.filter((item)=>!item.done)
          case 'done':
            return items.filter((item)=>item.done)
          default:
            return items;
        }
      }

      onFilterChange(filter){
        this.setState({filter})
      }
  render(){

        const {todoData, filter} = this.state
        const doneCount = todoData.filter((el)=>el.done).length
        const todoCount = todoData.length - doneCount
        const visibleItems = this.filter(todoData,filter)
        return (
          <div className="App">
            <AppHeader toDo={todoCount} done={doneCount}/>
            <ItemAddForm onItemAdded={this.addItem}/>
            <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
            />
            <TodoList 
            todos = {todoData}
            onDeleted={this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
            />
            
          </div>
        );
    }
}





