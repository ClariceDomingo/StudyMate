import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import MainNavigator from './src/components/navigation/MainNavigator';
import LandingPage from "./src/components/forms/LandingPage";

export default function App() {
  const [showLandingPage, setShowLandingPage] = useState(true);

  const handleStart = () => {
    setShowLandingPage(false);
  };

  return (
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
