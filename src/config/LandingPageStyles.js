import { StyleSheet } from "react-native";

const landingStyles = StyleSheet.create({
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    appName: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#333",
        textAlign: "center",
    },
    description: {
        fontSize: 16,
        color: "#666",
        marginBottom: 20,
        textAlign: "center",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        marginBottom: 30,
        textAlign: "center",
    },
    startButton: {
        backgroundColor: "#008B8B",
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    startButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default landingStyles;
