import React, { useLayoutEffect } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Spacing from "../../../constants/Spacing";
import FontSize from "../../../constants/FontSize";
import Colors from "../../../constants/Colors";
import Font from "../../../constants/Font";

const ForgotPasswordScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleRecovery = () => {
    navigation.navigate("LoginForm");
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.centered}>
          <Text style={styles.title}>Account Recovery</Text>
          <Text style={styles.subtitle}>Enter your email to recover your account.</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
        </View>

        <TouchableOpacity
          onPress={handleRecovery}
          style={styles.recoverButton}
        >
          <Text style={styles.buttonText}>Recover Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("LoginForm")}
          style={styles.backToLoginButton}
        >
          <Text style={styles.buttonText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Spacing * 2,
  },
  centered: {
    alignItems: "center",
  },
  title: {
    fontSize: FontSize.xLarge,
    color: Colors.primary,
    fontFamily: Font["poppins-bold"],
    marginVertical: Spacing * 3,
  },
  subtitle: {
    fontFamily: Font["poppins-semiBold"],
    fontSize: FontSize.large,
    maxWidth: "80%",
    textAlign: "center",
  },
  inputContainer: {
    marginVertical: Spacing * 3,
  },
  input: {
    height: 40,
    borderColor: Colors.primary,
    borderBottomWidth: 1,
    marginBottom: Spacing,
    fontFamily: Font["poppins-regular"],
  },
  recoverButton: {
    padding: Spacing * 2,
    backgroundColor: Colors.primary,
    marginVertical: Spacing * 3,
    borderRadius: Spacing,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: Spacing,
    },
    shadowOpacity: 0.3,
    shadowRadius: Spacing,
  },
  backToLoginButton: {
    padding: Spacing,
  },
  buttonText: {
    fontFamily: Font["poppins-bold"],
    color: Colors.onPrimary,
    textAlign: "center",
    fontSize: FontSize.large,
  },
});

export default ForgotPasswordScreen;
