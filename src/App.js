import {Component} from "react"
import {v4 as uuidv4} from "uuid"

import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"

import {AppContainer, CardContainer, TaskListContainer, EditContainer, Input, EditButton, Button} from './styledComponents.js'

class App extends Component{
  state = {
    taskInput: '',
    taskList: [],
    isEditing: false,
    editingTaskId: '',
    editingTask: '',
  }

  componentDidMount() {
    // Load Previous Todos from localstorage
    const savedList = JSON.parse(localStorage.getItem('taskList'))

    if(savedList) {
      this.setState({taskList: savedList,})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // Save todos to local storage whenever the todos state changes
    if (prevState.taskList !== this.state.taskList) {
      localStorage.setItem('taskList', JSON.stringify(this.state.taskList));
    }
  }

  // Change input on state
  changeInput = (val) => {
    this.setState({taskInput: val})
  }

  // Add Todos to state list
  addTask = () => {
    const {taskInput} = this.state

    const newTask = {
      id: uuidv4(),
      task: taskInput,
      isCompleted: false,
    }

    this.setState(prevState => ({taskList: [...prevState.taskList, newTask], taskInput:''}))
  }


  // Editing task 
  editTask = (id, task) => {
    this.setState(prevState => ({isEditing: !prevState.isEditing, editingTaskId: id, editingTask: task, }))
  }

  changeEditingTask = (event) => {
    this.setState({editingTask: event.target.value})
  }

  updateEditTask = () => {
    const {taskList, editingTaskId, editingTask} = this.state

    const editedTask = {
      id: editingTaskId,
      task: editingTask,
    }

    this.setState({taskList: taskList.map(each => 
      each.id === editingTaskId ? editedTask : each
    ), isEditing: false, editingTaskId: '', editingTask: '',})
  }

  cancelUpdate = () => {
    this.setState(prevState => ({isEditing: !prevState.isEditing}))
  }

  // Delete Task
  deleteTask = (id) => {
    const {taskList} = this.state

    const filteredList = taskList.filter(each => each.id !== id)

    this.setState({taskList: filteredList})
  }

  toggleCompleted = (id) => {
    this.setState(prevState => {
      const newTodos = prevState.taskList.map(each => {
        if(each.id === id) {
          return {...each, isCompleted: !each.isCompleted}
        } else {
          return each
    }})
  
    return {taskList: newTodos}
  })
  }

  render(){
    const {taskInput, taskList, isEditing, editingTask} = this.state

    return(
      <AppContainer>
        <CardContainer>
          <TaskInput taskInput={taskInput} changeInput={this.changeInput} addTask={this.addTask}/>

          {isEditing && (<EditContainer>
            <Input type='text' value={editingTask} onChange={this.changeEditingTask}/>
            <EditButton type='button' onClick={this.updateEditTask}>Update</EditButton>
            <Button type='button' onClick={this.cancelUpdate}>
              Cancel 
            </Button>
          </EditContainer>)}

          <TaskListContainer>
            {
              taskList.map(each => (
                <TaskList taskDetails={each} editTask={this.editTask} deleteTask={this.deleteTask} toggleCompleted={this.toggleCompleted} isEditing={isEditing} key={each.id}/>
              ))
            }
          </TaskListContainer>
        </CardContainer>
      </AppContainer>
    )
  }
}

export default App;
