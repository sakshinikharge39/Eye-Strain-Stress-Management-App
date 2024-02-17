import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome, Entypo } from "@expo/vector-icons";

export default function DigitalWellbeing() {
  const lineValue = [
    {
      platform: "whatsapp",
      icon: "whatsapp",
      color: "#25D366",
      value: 10,
    },
    {
      platform: "instagram",
      icon: "instagram",
      color: "#E4405F",
      value: 20,
    },
    {
      platform: "facebook",
      icon: "facebook",
      color: "#1877F2",
      value: 30,
    },
    {
      platform: "youtube",
      icon: "youtube",
      color: "#FF0000",
      value: 40,
    },
    {
      platform: "game-controller",
      icon: "gamepad",
      color: "#3498DB",
      value: 50,
    },
    {
      platform: "snapchat-square",
      icon: "snapchat-square",
      color: "#ffbc00",
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
            margin: 10,
            padding: 10, // Add padding for spacing around the box
            borderWidth: 1, // Add border width
            borderColor: "#000", // Add border color
            borderRadius: 10,
          }}
          key={index}
        >
          <FontAwesome name={item.icon} size={80} color={item.color} />

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
