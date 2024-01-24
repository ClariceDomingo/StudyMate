import React, { useState, useEffect } from "react";
import { Icon } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TaskScreen from "../screens/Task/TaskScreen";
import TimerScreen from "../screens/Timer/TimerScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";

import LoginForm from "../../components/forms/LoginForm";
import Help from "../screens/Settings/Help";
import About from "../screens/Settings/About";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Add your logic to check the user's login state
    // Example: AsyncStorage.getItem("isLoggedIn").then(value => setIsLoggedIn(!!value));
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Settings"
      screenOptions={({ route }) => ({        
        headerShown: false,
        tabBarStyle: { height: 55 },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // Set the icon name based on the route
          if (route.name === 'Profile') {
            iconName = focused ? 'account' : 'account-outline';
          } else if (route.name === 'Task') {
            iconName = focused ? 'notebook' : 'notebook-outline';
          } else if (route.name === 'Timer') {
            iconName = focused ? 'timer' : 'timer-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'cog' : 'cog-outline';
          }

          // You can return any component here
          return <Icon source={iconName} size={30} color={color} />;
        },
        
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}
    >  
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Task" component={TaskScreen} />
      <Tab.Screen name="Timer" component={TimerScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: true }} />

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
    </Tab.Navigator>
  );
}

export default function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='tab' component={HomeTabs} />
      <Stack.Screen name='Help' component={Help} />
      <Stack.Screen name='About' component={About} />
    </Stack.Navigator>
  );
}
