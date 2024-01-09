import React, { useState } from "react"; 
import { View, Text, TextInput, Button, Modal, ScrollView, TouchableOpacity} from "react-native"; 
import styles from "../../config/TaskStyles"; 
import DatePicker from "react-native-modern-datepicker"; 
import ModalSelector from 'react-native-modal-selector';

const TaskModal = ({ modalVisible, task, setTask, handleAddTask, handleCancel, validationError, categories, setNewCategory, newCategory, handleAddCategory, handleAddTaskAndCategory, handleDeleteCategory}) => { 
    const [selectedCategory, setSelectedCategory] = useState(task.category || ""); 

    const handleCategoryChange = (option) => {
        setSelectedCategory(option.value);
        setTask({ ...task, category: option.value });
    };

    return ( 
        <Modal visible={modalVisible} animationType="slide" transparent={false}> 
        
        <View style={styles.modalContainer}> 
            <ScrollView>
                <TextInput 
                    style={styles.input} 
                    placeholder="Title"
                    value={task.title} 
                    onChangeText={(text) => setTask({ ...task, title: text })} 
                    /> 

                <TextInput 
                    style={styles.input} 
                    placeholder="Description"
                    value={task.description} 
                    onChangeText={(text) => setTask({ ...task, description: text })}
                /> 
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flex: 1, marginRight: 10 }}>
                        <Text style={styles.inputLabel}>Category: {selectedCategory} </Text>
                        <ModalSelector
                            data={categories.map((category, index) => ({
                                key: index,
                                label: category,
                                value: category,
                            }))}
                            initValue={selectedCategory || "Select Category"}
                            onChange={handleCategoryChange}
                            style={{ color: selectedCategory === "Select Category" ? "black" : "#333" }}
                            optionContainerStyle={{
                                borderRadius: 5,
                                marginHorizontal: 10,
                                marginVertical: 5,
                            }}
                        />
                    </View>

                    {selectedCategory && (
                        <TouchableOpacity
                            style={[styles.deleteCategoryButton, { backgroundColor: "#FF3B30", alignSelf: "flex-end" }]}
                            onPress={() => handleDeleteCategory(selectedCategory)}
                        >
                            <Text style={styles.deleteCategoryButtonText}>Delete Category</Text>
                        </TouchableOpacity>
                    )}
                </View>
                
                <View style={styles.newCategoryContainer}>
                    <TextInput
                    style={styles.newCategoryInput}
                    placeholder="New Category"
                    value={newCategory}
                    onChangeText={(text) => setNewCategory(text)}
                    />
                    <TouchableOpacity style={styles.addCategoryButton} onPress={handleAddCategory}>
                    <Text style={styles.addCategoryButtonText}>Add Category</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.inputLabel}> Deadline: </Text> 
                <DatePicker 
                    style={styles.datePicker} 
                    mode="datepicker"
                    selected={task.deadline} 
                    onDateChange={(date) => setTask({ ...task, deadline: date }) }
                /> 

                {validationError && ( 
                    <Text style={styles.errorText}> Please fill in all fields correctly. </Text> 
                )}
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={handleAddTaskAndCategory}
                >
                    <Text style={styles.buttonText}>
                    {task.id ? "Update" : "Add"}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={handleCancel}
                >
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
            </ScrollView>
        </View> 
        </Modal> 
    ); 
}; 

export default TaskModal;
