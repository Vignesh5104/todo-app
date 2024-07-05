import {InputContainer, Input, AddButton} from "./styledComponents"

const TaskInput = (props) => {
    const {taskInput, changeInput, addTask} = props

    const onChangeInput = (event) => {
        changeInput(event.target.value)
    } 

    const onAddTask = () => {
        addTask()
    }


    return (
        <InputContainer>
            <Input type="text" value={taskInput} onChange={onChangeInput} placeholder="New Task" />
            <AddButton type='button' onClick={onAddTask}>Add</AddButton>
        </InputContainer>
    )
}

export default TaskInput