import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../../config/LandingPageStyles.js";
import { useNavigation } from "@react-navigation/native";

const LandingPage = ({ onStart }) => {
    const navigation = useNavigation();

    const handleStart = () => {
        onStart(navigation);
    };

    return (
        <View style={styles.container}>
        <Image
            source={require("../../../assets/logo1.png")}
            style={styles.logo}
        />

        <Text style={styles.appName}>StudyMate</Text>
        <Text style={styles.description}>Your study companion for organization and focus. Elevate your study game effortlessly!</Text>

        <TouchableOpacity style={styles.startButton} onPress={handleStart}>
            <Text style={styles.startButtonText}>Start</Text>
        </TouchableOpacity>
        </View>
    );
};

export default LandingPage;
