import React, { useLayoutEffect, useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import Spacing from "../../../constants/Spacing";
import FontSize from "../../../constants/FontSize";
import Colors from "../../../constants/Colors";
import Font from "../../../constants/Font";
import AppTextInput from "../AppTextInput";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState(""); // Add state for name
  const [username, setUsername] = useState(""); // Add state for username

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, [navigation]);
  
    const handleSignIn = async () => {
      try {
        navigation.navigate("Profile", { name, username }); // Pass name and username to ProfileScreen
      } catch (e) {
        console.debug(e.toString());
      }
    };
  
    return (
      <SafeAreaView>
        <View
          style={{
            padding: Spacing * 2,
          }}
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: FontSize.xLarge,
                color: Colors.primary,
                fontFamily: Font["poppins-bold"],
                marginVertical: Spacing * 3,
              }}
            >
              
            
              WELCOME!
            </Text>
          </View>
          <View
            style={{
              marginVertical: Spacing * 3,
            }}
          >
            <AppTextInput
              placeholder="Name"
              onChangeText={(text) => setName(text)}
            />
            <AppTextInput
              placeholder="Username"
              onChangeText={(text) => setUsername(text)}
            />
          </View>
  
          <TouchableOpacity
            onPress={handleSignIn}
            style={{
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
            }}
          >
            <Text
              style={{
                fontFamily: Font["poppins-bold"],
                color: Colors.onPrimary,
                textAlign: "center",
                fontSize: FontSize.large,
              }}
            >
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  export default LoginScreen;
  