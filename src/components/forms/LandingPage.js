import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../../config/LandingPageStyles.js";
import { useNavigation } from "@react-navigation/native";

const LandingPage = ({ onStart }) => {
    const navigation = useNavigation();

    const handleStart = () => {
        // Pass the navigation object to the onStart callback
        onStart(navigation);
    };

    return (
        <View style={styles.container}>
        <Image
            source={require("../../../assets/logo1.png")} // Replace with your actual logo path
            style={styles.logo}
        />

        {/* App name and short description */}
        <Text style={styles.appName}>StudyMate</Text>
        <Text style={styles.description}>Your Short Description Here</Text>

        {/* Start button */}
        <TouchableOpacity style={styles.startButton} onPress={handleStart}>
            <Text style={styles.startButtonText}>Start</Text>
        </TouchableOpacity>
        </View>
    );
};

export default LandingPage;
