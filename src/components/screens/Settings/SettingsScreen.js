import { View, Text, ScrollView, StyleSheet, ToastAndroid, Share } from "react-native";
import React, { useEffect } from "react";
import { List, Switch } from "react-native-paper";
import * as Linking from "expo-linking";

import { General, Timer, DeepFocusMode, Notifications, Help, About } from "./SubHeader";
import { AppHome, Clock } from "./Modals";

export default function SettingsScreen() {
  // Switches
  const [isSwitchOn1, setIsSwitchOn1] = React.useState(false); // auto start of next work
  const [isSwitchOn2, setIsSwitchOn2] = React.useState(false); // auto start of next break
  const [fullScreen, setFullScreen] = React.useState(false); // Full screen timer
  const [isSwitchOn7, setIsSwitchOn7] = React.useState(false); // Disable Internet
  const [isSwitchOn8, setIsSwitchOn8] = React.useState(false); // Session almost done Warning
  const [isSwitchOn9, setIsSwitchOn9] = React.useState(false); // Break almost done Warning

  const onToggleSwitch1 = () => setIsSwitchOn1(!isSwitchOn1);
  const onToggleSwitch2 = () => setIsSwitchOn2(!isSwitchOn2);

  const toggleFullScreen = () => setFullScreen(!fullScreen);

  const onToggleSwitch7 = () => setIsSwitchOn7(!isSwitchOn7);
  const onToggleSwitch8 = () => setIsSwitchOn8(!isSwitchOn8);
  const onToggleSwitch9 = () => setIsSwitchOn9(!isSwitchOn9);

  // Modals
  const [clockVisible, setClockVisible] = React.useState(false);
  const [appHomeVisible, setAppHomeVisible] = React.useState(false);
  // gets value
  const [selectedApHo, setSelectedApHo] = React.useState("Select");
  const [selectedFormat, setSelectedFormat] = React.useState("Select");

  const showAppHomeModal = () => setAppHomeVisible(true);
  const showClockModal = () => setClockVisible(true);

  const hideAppHomeModal = () => setAppHomeVisible(false);
  const hideClockModal = () => setClockVisible(false);

  const handleApHoSave = (value) => {
    setSelectedApHo(value);
  };

  const handleSave = (value) => {
    setSelectedFormat(value);
  };

  const chatWIthUs = () => {
    Linking.openURL("https://m.me/claricedomingo07")
      .catch((err) => console.error('An error occurred', err));
  };

  const reportIssue = () => {
    Linking.openURL("mailto:studymate.project101@gmail.com")
      .catch((err) => console.error('An error occurred', err));
  };

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      "You're using StudyMate version 1.0",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
  };

  // change link and delete this comment when done
  const shareApp = async () => {
    try {
      const result = await Share.share({
        message: 'Check out this app on the Play Store: https://play.google.com/store/apps/details?id=com.netmarble.tog&pcampaignid=web_share',
        title: 'Share App',
        url: 'https://play.google.com/store/apps/details?id=com.netmarble.tog&pcampaignid=web_share',
      });
      
      if (result.action === Share.sharedAction) {
        console.log('Shared successfully');
      } else if (result.action === Share.dismissedAction) {
        console.log('Share cancelled');
      }
    } catch (error) { 
      console.error('Error sharing:', error.message);
    }
  };
  
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <General />
        <View style={styles.indention}>
          <List.Item
            title="App Home"
            right={() => <Text style={styles.description}>{selectedApHo}</Text>}
            onPress={showAppHomeModal}
          />
          <List.Item
            title="Clock"
            right={() => (
              <Text style={styles.description}>{selectedFormat}</Text>
            )}
            onPress={showClockModal}
          />
        </View>

        <Timer />
        <View style={styles.indention}>
          <List.Item
            title="Auto Start of Next Work"
            right={() => (
              <Switch
                value={isSwitchOn1}
                onValueChange={onToggleSwitch1}
                style={styles.switch}
              />
            )}
          />
          <List.Item
            title="Auto Start of Next Break"
            right={() => (
              <Switch
                value={isSwitchOn2}
                onValueChange={onToggleSwitch2}
                style={styles.switch}
              />
            )}
          />
          <List.Item
            title="Full Screen Timer"
            right={() => (
              <Switch
                value={fullScreen}
                onValueChange={(value) => setFullScreen(value)}
                style={styles.switch}
              />
            )}
          />
          <List.Item title="Custom Quotes" />
        </View>

        <DeepFocusMode />
        <View style={styles.indention}>
          <List.Item
            title="In-app Panel Disable Internet"
            right={() => (
              <Switch
                value={isSwitchOn7}
                onValueChange={onToggleSwitch7}
                style={styles.switch}
              />
            )}
          />
        </View>

        <Notifications />
        <View style={styles.indention}>
          <List.Item
            title="Session Almost Over Warning"
            right={() => (
              <Switch
                value={isSwitchOn8}
                onValueChange={onToggleSwitch8}
                style={styles.switch}
              />
            )}
          />
          <List.Item
            title="Break Almost Over Warning"
            right={() => (
              <Switch
                value={isSwitchOn9}
                onValueChange={onToggleSwitch9}
                style={styles.switch}
              />
            )}
          />
          <List.Item title="Manage Notifications" />
        </View>

        <Help />
        <View style={styles.indention}>
          <List.Item
            title="Chat With us"
            onPress={chatWIthUs}
          />
          <List.Item
            title="Report an Issue"
            description="Via Email (attach screenshots if possible)"
            onPress={reportIssue}
          />
        </View>

        <About />
        <View style={styles.indention}>
          <List.Item title="App Version 1.0.0" onPress={showToastWithGravity} />
          <List.Item title="Share App" onPress={shareApp}/>
        </View>
        
        {/* MODALS */}
        <AppHome
          visible={appHomeVisible}
          hideModal={hideAppHomeModal}
          onSave={handleApHoSave}
        />
        <Clock
          visible={clockVisible}
          hideModal={hideClockModal}
          onSave={handleSave}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
  },

  description: {
    color: "rgba(0, 0, 0, 0.5)",
  },

  indention: {
    marginLeft: 15,
  },

  switch: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
    height: 23,
  },
});
