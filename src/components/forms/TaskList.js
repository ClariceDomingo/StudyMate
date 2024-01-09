import React from "react"; 
import { ScrollView } from "react-native"; 
import TaskItem from "./TaskItem"; 
import styles from "../../config/TaskStyles"; 

const TaskList = ({ tasks, handleEditTask, handleToggleCompletion, handleDeleteTask }) => { 
    return ( 
        <ScrollView style={styles.taskList}> 
            {tasks.map((t, index) => ( 
                <TaskItem 
                    key={index} 
                    task={t} 
                    handleEditTask={handleEditTask} 
                    handleToggleCompletion={handleToggleCompletion} 
                    handleDeleteTask={handleDeleteTask} 
                /> 
            ))} 
        </ScrollView> 
    ); 
}; 

export default TaskList;
