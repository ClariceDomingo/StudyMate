import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

import MainNavigator from './src/components/navigation/MainNavigator';
import LandingPage from "./src/components/forms/LandingPage";
import colors from './src/config/colors';
export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: colors.colors,
    mode: "adaptive",
  };

  const [showLandingPage, setShowLandingPage] = useState(true);

  const handleStart = () => {
    setShowLandingPage(false);
  };

  return (
    <PaperProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />

          <NavigationContainer>
            {showLandingPage ? (
              <LandingPage onStart={handleStart} />
            ) : (
              <MainNavigator />
            )}
          </NavigationContainer>
        </SafeAreaView>
      </GestureHandlerRootView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1
  },
});
