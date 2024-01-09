import { StyleSheet } from "react-native"; 

const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        padding: 20, 
        backgroundColor: "#f7f7f7", 
    }, 
    title: { 
        fontSize: 28, 
        fontWeight: "bold", 
        marginBottom: 20, 
        color: "#333", 
        textAlign: "center", 
    }, 
    taskList: { 
        flex: 1, 
    }, 
    taskItem: { 
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center", 
        backgroundColor: "#fff", 
        marginBottom: 10, 
        padding: 15, 
        borderRadius: 10, 
    }, 
    taskTextContainer: { 
        flex: 1, 
    }, 
    taskText: { 
        fontSize: 18, 
        fontWeight: "bold", 
        color: "#333", 
    }, 
    completedTaskText: { 
        textDecorationLine: "line-through", 
        color: "gray", 
    }, 
    taskDescription: { 
        fontSize: 16, 
        color: "#666", 
    }, 
    taskTime: { 
        fontSize: 14, 
        color: "#666", 
    }, 
    taskStatus: { 
        fontSize: 16, 
        color: "#666", 
    }, 
    buttonContainer: { 
        flexDirection: "column",  
        marginVertical: 2,  
    }, 
    editButton: { 
        backgroundColor: "#007BFF", 
        borderRadius: 5, 
        padding: 10, 
        marginRight: 10, 
        width: 110, 
    }, 
    button: { 
        marginBottom: 10, 
    }, 
    completeButton: { 
        backgroundColor: "#4CAF50", 
        borderRadius: 5, 
        padding: 10, 
        marginRight: 10, 
        width: 110, 
    }, 
    completedButton: { 
        backgroundColor: "#808080", 
    }, 
    buttonText: { 
        color: "#fff", 
        fontSize: 15, 
    }, 
    deleteButton: { 
        backgroundColor: "#FF9500", 
        borderRadius: 5, 
        padding: 10, 
        width: 110, 
    }, 
    addButton: { 
        alignItems: "center", 
        justifyContent: "center", 
        backgroundColor: "#008B8B", 
        paddingVertical: 15, 
        borderRadius: 10, 
        marginTop: 20, 
        marginBottom: 10,
    }, 
    addButtonText: { 
        color: "#fff", 
        fontSize: 18, 
        fontWeight: "bold", 
    }, 
    modalContainer: { 
        flex: 1, 
        padding: 20, 
        backgroundColor: "#fff", 
    }, 
    input: { 
        borderWidth: 1, 
        borderColor: "#ccc", 
        padding: 10, 
        marginBottom: 10, 
        borderRadius: 5, 
        fontSize: 16, 
    }, 
    inputLabel: { 
        fontSize: 16, 
        fontWeight: "bold", 
        marginTop: 10,
        marginBottom: 10,
    }, 
    errorText: { 
        color: "#FF3B30", 
        fontSize: 14, 
        marginBottom: 10, 
    }, 
    taskDeadline: { 
        color: "#FF3B12", 
    }, 
    taskCreatedAt: { 
        color: "#5497FF", 
    }, 
    categoryList: {
        flexDirection: "row",
        maxHeight: 40,
        marginBottom: 10,
    },
    categoryItem: {
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#008B8B",
    },
    selectedCategory: {
        backgroundColor: "#008B8B",
    },
    selectedCategory2: {
        color: "black",
    },
    categoryText: {
        color: "black",
        fontWeight: "bold",
    },
    newCategoryContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    newCategoryInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius: 5,
        fontSize: 16,
        marginRight: 10,
    },
    addCategoryButton: {
        backgroundColor: "#008B8B",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
    },
    addCategoryButtonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },
    addButton: {
        backgroundColor: "#008B8B",
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    cancelButton: {
        backgroundColor: "#FF3B30",
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    backgroundImage: {
        flex: 1,
        width: "100%",
        height: "80 %",
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60,
    },
    deleteCategoryButton: {
        backgroundColor: "#FF3B30",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    deleteCategoryButtonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },
}); 

export default styles;
