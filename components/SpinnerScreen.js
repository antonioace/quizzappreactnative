import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const SpinnerScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#d1d1d1" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 999,
  },
});

export default SpinnerScreen;
