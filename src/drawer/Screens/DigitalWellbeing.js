import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome, Entypo } from "@expo/vector-icons";

export default function DigitalWellbeing() {
  const lineValue = [
    {
      platform: "whatsapp",
      value: 10,
    },
    {
      platform: "instagram",
      value: 20,
    },
    {
      platform: "facebook",
      value: 30,
    },
    {
      platform: "youtube",
      value: 40,
    },
    {
      platform: "game-controller",
      value: 50,
    },
    {
      platform: "snapchat-square",
      value: 100,
    },
  ];

  return (
    <View style={{ marginTop: 40 }}>
      {lineValue.map((item, index) => (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 13,
          }}
          key={index}
        >
          <Entypo name={item.platform} size={80} color="#C13584" />

          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "800", margin: 10 }}>
              {item.platform}
            </Text>
            <View
              style={{
                width: `${item.value}%`,
                height: 3,
                backgroundColor: "black",
              }}
            ></View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
