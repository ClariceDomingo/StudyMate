import { View, Text } from "react-native";
import React from "react";
import { List, Appbar, } from "react-native-paper";

export default function About({ navigation }) {
  const items = [
    { label: 'App Version: 0.0.0', },
    { label: 'Privacy Policy' },
    { label: 'Share App'  },
  ];

  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.pop()} />
        <Appbar.Content title="About" />
      </Appbar.Header>

      {items.map((items, index) => (
        <List.Item key={index} title={items.label} />
      ))}
    </View>
  );
}
