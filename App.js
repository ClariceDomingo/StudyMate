import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import MainNavigator from './src/components/navigation/MainNavigator';
import LandingPage from "./src/components/forms/LandingPage";

export default function App() {
  const [showLandingPage, setShowLandingPage] = useState(true);

  // Function to handle navigation to the MainNavigator
  const handleStart = () => {
    setShowLandingPage(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* Wrap the entire component tree with NavigationContainer */}
      <NavigationContainer>
        {/* Conditionally render LandingPage or MainNavigator */}
        {showLandingPage ? (
          <LandingPage onStart={handleStart} />
        ) : (
          <MainNavigator />
        )}
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
