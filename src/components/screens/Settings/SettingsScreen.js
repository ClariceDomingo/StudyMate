import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { List, Divider, Switch } from "react-native-paper";

import { General, Timer, DeepFocusMode, Notifications, Help, About } from './SubHeader';
import { AppHome, Clock } from './Modals';

export default function SettingsScreen({ navigation }) {
  // Switches
  const [isSwitchOn1, setIsSwitchOn1] = React.useState(false); // auto start of next work
  const [isSwitchOn2, setIsSwitchOn2] = React.useState(false); // auto start of next break
  const [isSwitchOn5, setIsSwitchOn5] = React.useState(false); // Full screen timer
  const [isSwitchOn7, setIsSwitchOn7] = React.useState(false); // Disable Internet
  const [isSwitchOn8, setIsSwitchOn8] = React.useState(false); // Session almost done Warning
  const [isSwitchOn9, setIsSwitchOn9] = React.useState(false); // Break almost done Warning

  const onToggleSwitch1 = () => setIsSwitchOn1(!isSwitchOn1);
  const onToggleSwitch2 = () => setIsSwitchOn2(!isSwitchOn2);
  const onToggleSwitch5 = () => setIsSwitchOn5(!isSwitchOn5);
  const onToggleSwitch7 = () => setIsSwitchOn7(!isSwitchOn7);
  const onToggleSwitch8 = () => setIsSwitchOn8(!isSwitchOn8);
  const onToggleSwitch9 = () => setIsSwitchOn9(!isSwitchOn9);

  // Modals
  const [clockVisible, setClockVisible] = React.useState(false);
  const [appHomeVisible, setAppHomeVisible] = React.useState(false);
  // gets value
  const [selectedApHo, setSelectedApHo] = React.useState('Select');
  const [selectedFormat, setSelectedFormat] = React.useState('Select');

  const showAppHomeModal = () => setAppHomeVisible(true);
  const showClockModal = () => setClockVisible(true);

  const hideAppHomeModal = () => setAppHomeVisible(false);
  const hideClockModal = () => setClockVisible(false);

  // App Home 
  const handleApHoSave = (value) => {
    setSelectedApHo(value);
  }

  // Clock Format
  const handleSave = (value) => {
    setSelectedFormat(value);
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
      <View>

        <General />
        <View style={styles.indention}>
          <List.Item title="App Home" right={() => ( <Text style={styles.description}>{selectedApHo}</Text> )} onPress={showAppHomeModal} />
          <List.Item title="Clock" right={() => ( <Text style={styles.description}>{selectedFormat}</Text> )} onPress={showClockModal} />
        </View>

        <Timer />
        <View style={styles.indention}>
          <List.Item title="Auto Start of Next Work" right={() => ( <Switch value={isSwitchOn1} onValueChange={onToggleSwitch1} style={styles.switch} /> )} />
          <List.Item title="Auto Start of Next Break" right={() => ( <Switch value={isSwitchOn2} onValueChange={onToggleSwitch2} style={styles.switch} /> )} />
          <List.Item title="Full Screen Timer" right={() => ( <Switch value={isSwitchOn5} onValueChange={onToggleSwitch5} style={styles.switch} /> )} />
          <List.Item title="Custom Quotes" />
        </View>

        <DeepFocusMode />
        <View style={styles.indention} >
          <List.Item title="In-app Panel Disable Internet" right={() => ( <Switch value={isSwitchOn7} onValueChange={onToggleSwitch7} style={styles.switch} /> )} />
          {/* <List.Item title="White Noise" right={() => ( <Text style={styles.description}>Text</Text> )}  />   */}
        </View>

        <Notifications />
        <View style={styles.indention}>
          <List.Item title="Session Almost Over Warning" right={() => ( <Switch value={isSwitchOn8} onValueChange={onToggleSwitch8} style={styles.switch} /> )}  />
          <List.Item title="Break Almost Over Warning" right={() => ( <Switch value={isSwitchOn9} onValueChange={onToggleSwitch9} style={styles.switch} /> )} />
          <List.Item title="Daily Reminder" />
          <List.Item title="Manage Notifications" />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Help")}>
          <Help />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("About")}>
          <About />
        </TouchableOpacity>

      {/* Call Imported Modal */}
      <AppHome visible={appHomeVisible} hideModal={hideAppHomeModal} onSave={handleApHoSave} />
      <Clock visible={clockVisible} hideModal={hideClockModal} onSave={handleSave}/>
      
      </View>
    </ScrollView>   
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10
  },
  description:{
    color: 'rgba(0, 0, 0, 0.5)'
  }, 
  
  indention: {
    marginLeft: 15
  },

  switch: {
    borderColor: 'blue',
    transform: [{scaleX: .8}, {scaleY: .8}],
    height: 23
  }
});