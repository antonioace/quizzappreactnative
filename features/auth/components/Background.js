import { View, Text } from "react-native";
import React from "react";

export default function Background() {
  return (
    <View
      style={{
        position: "absolute",
        backgroundColor: "#7E8EFB",
        top: -250,
        width: 1000,
        height: 1200,
        transform: [{ rotate: "-70deg" }],
      }}
    ></View>
  );
}
