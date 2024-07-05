import {TaskItem, TextContainer, CheckBox, Text, OptionsContainer, Button} from "./styledComponents"

const TaskList = (props) => {
    const {taskDetails, deleteTask, editTask, toggleCompleted, isEditing} = props
    const {id, task, isCompleted} = taskDetails

    const onDeleteTask = () => {
        deleteTask(id)
    }

    const onEditTask = () => {
        editTask(id, task)
    }

    const onToggleCompleted = () => {
        toggleCompleted(id)
    }

    return (
        <TaskItem>
            <TextContainer>
                <CheckBox type='checkbox' checked={isCompleted} onChange={onToggleCompleted}/>
                <Text>{task}</Text>
            </TextContainer>
            <OptionsContainer>
                <Button type="button" onClick={onEditTask} disabled={isEditing}>
                    Edit
                </Button>
                <Button type="button" onClick={onDeleteTask} disabled={isEditing}>
                    Delete
                </Button>
            </OptionsContainer>
        </TaskItem>
    )
}

export default TaskList
