import { View, Text, Image } from "react-native";
import React from "react";

export default function Logo() {
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <Image
        style={{
          width: 100,
          height: 110,
        }}
        source={
            {
                uri:"https://ih1.redbubble.net/image.2386420274.5433/st,small,507x507-pad,600x600,f8f8f8.jpg"
            }
        }
      />
    </View>
  );
}
