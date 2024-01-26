import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native"; 
import TaskItem from "./TaskItem"; 
import styles from "../../config/TaskStyles"; 

const TaskList = ({ tasks, handleEditTask, handleToggleCompletion, handleDeleteTask }) => { 
    const [showCompleted, setShowCompleted] = useState(false);
    const completedTasks = tasks.filter((task) => task.status === "Completed");
    const pendingTasks = tasks.filter((task) => task.status !== "Completed");
    
    return ( 
        <ScrollView style={styles.taskList}> 
            {pendingTasks.map((t, index) => (
                <TaskItem 
                    key={index} 
                    task={t} 
                    handleEditTask={handleEditTask} 
                    handleToggleCompletion={handleToggleCompletion} 
                    handleDeleteTask={handleDeleteTask} 
                /> 
            ))} 

            {completedTasks.length > 0 && (
                <>
                    <TouchableOpacity
                        style={styles.completedSectionHeader}
                        onPress={() => setShowCompleted(!showCompleted)}
                    >
                        <Text style={styles.completedSectionHeaderText}>
                            Completed {showCompleted ? "▼" : "▶"}
                        </Text>
                    </TouchableOpacity>

                    {showCompleted && (
                        <View>
                            {completedTasks.map((t, index) => (
                                <TaskItem
                                    key={index}
                                    task={t}
                                    handleEditTask={handleEditTask}
                                    handleToggleCompletion={handleToggleCompletion}
                                    handleDeleteTask={handleDeleteTask}
                                />
                            ))}
                        </View>
                    )}
                </>
            )}
        </ScrollView> 
    ); 
}; 

export default TaskList;
