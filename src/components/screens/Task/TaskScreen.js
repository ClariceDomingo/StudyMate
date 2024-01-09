import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, TextInput, ImageBackground } from "react-native";
import TaskList from "../../forms/TaskList";
import TaskModal from "../../forms/TaskModal";
import styles from "../../../config/TaskStyles";

const backgroundImage = require("../../../../assets/emptyImage.png");

const TaskScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "Pending",
    deadline: "",
    createdAt: "",
    category: "",
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [validationError, setValidationError] = useState(false);
  const [categories, setCategories] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]); 
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [newCategory, setNewCategory] = useState("");

  const handleAddTask = () => {
    setEditingTask(null);
    setTask({
      title: "",
      description: "",
      status: "Pending",
      deadline: "",
      createdAt: "",
      category: "",
    });
    setModalVisible(true);
    setValidationError(false);
  };

  const handleAddCategory = () => {
    if (newCategory.trim() !== "") {
      // Check if the category already exists
      if (!categories.includes(newCategory)) {
        setCategories([...categories, newCategory]);
        setTask({ ...task, category: newCategory });
        setNewCategory("");
        setModalVisible(true);
      } else {
        // Display an alert or handle it as needed
        alert("Category already exists!");
      }
    }
  };

  const handleAddTaskAndCategory = () => {
    if (task.title.trim() !== "" && task.deadline !== "" && (task.category.trim() !== "" || newCategory.trim() !== "")
    ) {
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleString();

      const newTask = {
        id: Date.now(),
        ...task,
        createdAt: formattedDate,
        category: task.category || newCategory,
      };

      setTasks((prevTasks) => [...prevTasks, newTask]);
      
      if (selectedCategory === "All" || selectedCategory === newTask.category) {
        setFilteredTasks((prevFilteredTasks) => [...prevFilteredTasks, newTask]);
      }
      // Clear the task input fields and reset state 
      setTask({ 
        title: "", 
        description: "", 
        status: "Pending", 
        deadline: "", 
        createdAt: "", 
        category: "",
      }); 
          
      // Close the modal 
      setModalVisible(false); 
          
      // Reset validation error 
      setValidationError(false);  
    } else { 
      
      // Show validation error if fields are not filled 
      setValidationError(true);  
    } 
  }; 

  // Function to handle task editing 
  const handleEditTask = (task) => { 

    // Ensure that date and time values are preserved without modification
    setTask((prevTask) => {
      // Copy over all properties from the existing task
      const updatedTask = { ...prevTask };

      // Copy over properties from the task being edited
      for (const key in task) {
        if (task.hasOwnProperty(key)) {
          updatedTask[key] = task[key];
        }
      }
      return updatedTask;
    });  
    setEditingTask(task);
    // Open the modal for editing 
    setModalVisible(true);  
  }; 

  // Function to delete a task 
  const handleDeleteTask = (taskId) => { 
    const updatedTasks = tasks.filter((t) => t.id !== taskId); 
    setTasks(updatedTasks); 
  }; 

  // Function to toggle task completion status 
  const handleToggleCompletion = (taskId) => { 
    const updatedTasks = tasks.map((t) => 
      t.id === taskId 
        ? { 
            ...t, 
            status: t.status === "Pending" ? "Completed" : "Pending", 
          } 
        : t 
    ); 
    setTasks(updatedTasks); 
  };

  // Function to handle category filtering
  const handleFilterByCategory = (selectedCategory) => {
    if (selectedCategory === "All") {
      // Display all tasks when "All" category is selected
      setFilteredTasks(tasks);
    } else {
      // Filter tasks based on the selected category
      const filteredTasks = tasks.filter(
        (t) => t.category.toLowerCase() === selectedCategory.toLowerCase()
      );
      setFilteredTasks(filteredTasks);
    }
    setSelectedCategory(selectedCategory);
  };

  // Display categories at the top
  const renderCategories = () => {
    return (
      <ScrollView horizontal style={styles.categoryList}>
        {/* Add "All" category to display all tasks */}
        <TouchableOpacity
          style={[
            styles.categoryItem,
            selectedCategory === "All" && styles.selectedCategory,
          ]}
          onPress={() => handleFilterByCategory("All")}
        >
          <Text style={[styles.categoryText, selectedCategory === "All" && {color: "#fff"}]}>All</Text>
        </TouchableOpacity>

        {/* Display other categories */}
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryItem,
              selectedCategory === category && styles.selectedCategory,
            ]}
            onPress={() => handleFilterByCategory(category)}
          >
            <Text style={[styles.categoryText, selectedCategory === category && { color: "#fff" }]}>{category}</Text>
          </TouchableOpacity>
        ))}
        
      </ScrollView>
    );
  };

  const renderTaskList = () => {
    if (filteredTasks.length === 0) {
      // Render background image when there are no tasks
      return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}></ImageBackground>
      );
    }

    // Render TaskList component with filtered tasks
    return (
      <TaskList
        tasks={filteredTasks}
        handleEditTask={handleEditTask}
        handleToggleCompletion={handleToggleCompletion}
        handleDeleteTask={handleDeleteTask}
      />
    );
  };

  // Render the JSX for the component 
  return (
    <View style={styles.container}>
      
      {renderCategories()}

      {renderTaskList()} 


      {/* Button to add or edit tasks */} 
      <TouchableOpacity
        style={styles.addButton} 
        onPress={() => {
          setEditingTask(null);
          setTask({
            title: "",
            description: "",
            status: "Pending",
            deadline: "",
            createdAt: "",
            category: "",
          });
          setNewCategory("");
          setModalVisible(true);
          setValidationError(false);
        }}
      >
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>

      {/* Render the TaskModal component */}
      <TaskModal
        modalVisible={modalVisible}
        task={task}
        setTask={setTask}
        handleAddTask={handleAddTask}
        handleAddTaskAndCategory={handleAddTaskAndCategory}
        handleCancel={() => {
          setEditingTask(null);
          setTask({
            title: "",
            description: "",
            status: "Pending",
            deadline: "",
            createdAt: "",
            category: "",
          });
          setModalVisible(false);
          setValidationError(false);
        }}
        validationError={validationError}
        categories={categories}
        setNewCategory={setNewCategory}
        newCategory={newCategory}
        handleAddCategory={handleAddCategory} 
      />
    </View>
  );
};

// Export the App component as the default export 
export default TaskScreen;
