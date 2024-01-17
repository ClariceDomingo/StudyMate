// MainNavigator.js
import React, { useState, useEffect } from "react";
import { Icon } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TaskScreen from "../screens/Task/TaskScreen";
import TimerScreen from "../screens/Timer/TimerScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import LoginForm from "../../components/forms/LoginForm";
import ForgotPasswordScreen from "../forms/ForgotPasswordForm";
import SignUpForm from "../forms/SignUpForm"; // Import the SignUpForm component

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Add your logic to check the user's login state
    // Example: AsyncStorage.getItem("isLoggedIn").then(value => setIsLoggedIn(!!value));
  }, []);

  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: { height: 55 } }} initialRouteName="Profile">
      {/* Profile Screen */}
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon source="account" size={30} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />

      {/* Task Screen */}
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon source="notebook" size={30} />
          ),
        }}
        name="Task"
        component={TaskScreen}
      />

      {/* Timer Screen */}
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon source="timer" size={30} />
          ),
        }}
        name="StudyTimer"
        component={TimerScreen}
      />

      {/* Settings Screen */}
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon source="settings-helper" size={30} />
          ),
        }}
        name="Settings"
        component={SettingsScreen}
      />

      {/* Conditionally render LoginForm screen based on the user's login state */}
      {isLoggedIn ? null : (
        <Tab.Screen
          options={{
            tabBarButton: () => null, // Hide the tab button
            tabBarIcon: () => null, // Hide the tab icon
          }}
          name="LoginForm"
          component={LoginForm}
        />
      )}

      {/* Add ForgotPasswordScreen to the navigator */}
      <Tab.Screen
        options={{
          tabBarButton: () => null,
          tabBarIcon: () => null,
        }}
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />

    {!isLoggedIn ? (
        <Tab.Screen
          options={{
            tabBarButton: () => null,
            tabBarIcon: () => null,
    }}
    name="SignUpForm"  // Corrected screen name to "SignUpForm"
    component={SignUpForm}
  />
) : null}
    </Tab.Navigator>
  );
}
