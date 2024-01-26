import React, { useState, useEffect } from "react";
import { Icon } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TaskScreen from "../screens/Task/TaskScreen";
import TimerScreen from "../screens/Timer/TimerScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import LoginForm from "../forms/LoginForm"

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function MainNavigator() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Add your logic to check the user's login state
    // Example: AsyncStorage.getItem("isLoggedIn").then(value => setIsLoggedIn(!!value));
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Task"
      screenOptions={({ route }) => ({        
        headerShown: false,
        tabBarStyle: { height: 55 }, 
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Profile') {
            iconName = focused ? 'account' : 'account-outline';
          } else if (route.name === 'Task') {
            iconName = focused ? 'notebook' : 'notebook-outline';
          } else if (route.name === 'Timer') {
            iconName = focused ? 'timer' : 'timer-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'cog' : 'cog-outline';
          }

          return <Icon source={iconName} size={30} color={color} />;
        },

        tabBarIconStyle: { marginTop: 5 },
        tabBarActiveTintColor: '#0a4f4f',
        tabBarInactiveTintColor: 'rgba(0, 0, 0, 0.8)',
        tabBarLabelStyle: { color: 'black', fontSize: 12, marginBottom: 5 },
      })}
    >  
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Task" component={TaskScreen} />
      <Tab.Screen name="Timer" component={TimerScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />

      {}
      {isLoggedIn ? null : (
        <Tab.Screen
          options={{
            tabBarButton: () => null, 
            tabBarIcon: () => null, 
          }}
          name="LoginForm"
          component={LoginForm}
        />
      )}

      {}
      
    </Tab.Navigator>
  );
}
