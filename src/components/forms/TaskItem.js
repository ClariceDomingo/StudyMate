import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
import { RectButton } from "react-native-gesture-handler";
import styles from "../../config/TaskStyles";

const TaskItem = ({ task, handleEditTask, handleToggleCompletion, handleDeleteTask }) => {
  const renderRightActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100],
      outputRange: [0, 0.5, 1],
    });

    return (
      <View style={styles.rightActionContainer}>
        <RectButton
          onPress={() => handleEditTask(task)}
          style={[styles.rightAction, { backgroundColor: "#5497FF" }]}
        >
          <Feather name="edit" size={20} color="#fff" />
          <Text style={styles.actionLabel}>Edit</Text>
        </RectButton>
        <RectButton
          onPress={() => handleDeleteTask(task.id)}
          style={[styles.rightAction, { backgroundColor: "#D24545" }]}
        >
          <Feather name="trash-2" size={20} color="#fff" />
          <Text style={styles.actionLabel}>Delete</Text>
        </RectButton>
      </View>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.taskItem}>
        <TouchableOpacity
          onPress={() => handleToggleCompletion(task.id, task.status)}
          style={[
            styles.completeButton,
            task.status === "Completed" && styles.completedButton,
          ]}
        >
          <Feather
            name={task.status === "Completed" ? "check-circle" : "circle"}
            size={20}
            color={task.status === "Completed" ? "#fff" : "#008B8B"}
          />
        </TouchableOpacity>
        <View style={styles.taskTextContainer}>
          <Text
            style={[
              styles.taskText,
              task.status === "Completed" && styles.completedTaskText,
            ]}
          >
            {task.title}
          </Text>
          <Text style={styles.taskDescription}>{task.description}</Text>
          <Text style={styles.taskStatus}>Status: {task.status}</Text>
          <Text style={styles.taskDeadline}>Deadline: {task.deadline}</Text>
          <Text style={styles.taskCreatedAt}>Created: {task.createdAt}</Text>
        </View>
      </View>
    </Swipeable>
  );
};

export default TaskItem;
