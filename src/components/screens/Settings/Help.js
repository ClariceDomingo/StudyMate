import { View } from "react-native";
import React from "react";
import { List, Appbar } from "react-native-paper";

export default function Help({ navigation }) {
  const items = [
    { label: 'Chat With Us', },
    { label: 'Report an Issue', description: 'Via Email (attach screenshots if possible)' },
  ];

  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.pop()} />
        <Appbar.Content title="Help" />
      </Appbar.Header>

      {items.map((items, index) => (
        <List.Item key={index} title={items.label} description={items.description} />
      ))}
    </View>
  );
}
