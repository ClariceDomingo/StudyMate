import {
  View,
  Modal,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Text, Button, List, Icon } from "react-native-paper";
import ColorPicker from "react-native-wheel-color-picker";

// select App Home
export function AppHome({ visible, hideModal, onSave }) {
  const [selectedAppHome, setSelectedAppHome] = React.useState(null);

  const appHome = [
    { label: "Profile", value: "Profile" },
    { label: "Task", value: "Task" },
    { label: "Timer", value: "Timer" },
  ];

  const handleAppHome = (home) => {
    setSelectedAppHome(home);
  };

  const handleAppHomeSubmission = () => {
    onSave(selectedAppHome);
    hideModal();
  };

  return (
    <Modal visible={visible} animationType="none" transparent={true}>
      <View style={styles.container}>
        <View style={styles.body}>
          <List.Item
            title="Clock"
            left={(props) => <List.Icon {...props} icon="arrow-left" />}
            onPress={hideModal}
            />

          <ScrollView showsVerticalScrollIndicator={false}>
            {appHome.map((home) => (
              <TouchableOpacity
                key={home.value}
                style={[
                  styles.option,
                  selectedAppHome === home.value && styles.selectedOption,
                ]}
                onPress={() => handleAppHome(home.value)}
              >
                <Text>{home.label}</Text>
                {selectedAppHome === home.value && (
                  <View style={styles.checkIcon}>
                    <Icon source="check" size={15} />
                  </View>
                )}
              </TouchableOpacity>
            ))}
            </ScrollView>
          <Button onPress={handleAppHomeSubmission}>Set</Button>
        </View>
      </View>
    </Modal>
  );
}


// select clock format
export function Clock({ visible, hideModal, onSave }) {
  const [selectedFormat, setSelectedFormat] = React.useState(null);

  const clockFormats = [
    { label: "24-Hour Clock", value: "24-Hour" },
    { label: "12-Hour Clock", value: "12-Hour" },
  ];

  const handleClockFormat = (format) => {
    setSelectedFormat(format);
  };

  const handleClockSubmission = () => {
    onSave(selectedFormat);
    hideModal();
  };

  return (
    <Modal visible={visible} animationType="none" transparent={true}>
      <View style={styles.container}>
        <View style={styles.body}>
          <List.Item
            title="Clock"
            left={(props) => <List.Icon {...props} icon="arrow-left" />}
            onPress={hideModal}
          />

          {clockFormats.map((format) => (
            <TouchableOpacity
              key={format.value}
              style={[
                styles.option,
                selectedFormat === format.value && styles.selectedOption,
              ]}
              onPress={() => handleClockFormat(format.value)}
            >
              <Text>{format.label}</Text>
              {selectedFormat === format.value && (
                <View style={styles.checkIcon}>
                  <Icon source="check" size={15} />
                </View>
              )}
            </TouchableOpacity>
          ))}
          <Button onPress={handleClockSubmission}>Set</Button>
        </View>
      </View>
    </Modal>
  );
}


const transparent = "rgba(0, 0, 0, 0.5)";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: transparent,
  },

  body: {
    backgroundColor: "#fff",
    padding: 15,
    width: "90%",
    height: 250,
    borderRadius: 30,
    flexDirection: "column",
  },

  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 8,
    backgroundColor: "#fff",
  },

  selectedOption: {
    backgroundColor: "#f5f5f5",
  },

  checkIcon: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginLeft: 200,
  },
});
