import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Text, Icon } from 'react-native-paper'

export function General() {
  return (
    <View style={styles.container}>
      <Icon source="cog-outline" size={25}  />
      <Text style={styles.text}>General</Text>
    </View>
  )
}

export function Timer() {
  return (
    <View style={styles.container}>
      <Icon source="timer-outline" size={25}  />
      <Text style={styles.text}>Timer</Text>
    </View>
  )
}

export function DeepFocusMode() {
  return (
    <View style={styles.container}>
      <Icon source="record-circle-outline" size={25}  />
      <Text style={styles.text}>Deep Focus Mode</Text>
    </View>
  )
}

export function Notifications() {
  return (
    <View style={styles.container}>
      <Icon source="bell-outline" size={25}  />
      <Text style={styles.text}>Notifications</Text>
    </View>
  )
}

export function Help() {
  return (
    <View style={styles.container}>
      <Icon source="help-circle-outline" size={25}  />
      <Text style={styles.text}>Help</Text>
    </View>
  )
}


export function About() {
  return (
    <View style={styles.container}>
      <Icon source="information-outline" size={25}  />
      <Text style={styles.text}>About</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:  'row',
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 10,
  },
  
  text: {
    fontWeight: '500',
    marginLeft: 15
  }
});