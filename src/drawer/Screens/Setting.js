import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
export default function Setting() {
  const settingMenu = [
    { icon: "home", title: "Profile" },
    {
      icon: "home",
      title: "Contact Info",
    },
    { icon: "home", title: "Password" },

    { icon: "home", title: "Privacy Policy" },
    { icon: "home", title: "Logout" },
  ];
  return (
    <View style={{ marginTop: 40 }}>
      {settingMenu.map((item, index) => (
        <View
          style={{
            justifyContent: "center",

            paddingVertical: 24,
            marginTop: 10,
            backgroundColor: "#F87171",
            borderRadius: 10,

            margin: 10,
            marginBottom: 12,
            borderRadius: 20,
          }}
        >
          <AntDesign
            name={item.icon}
            size={24}
            color={"#000"}
            style={{ marginLeft: 20 }}
          />
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              paddingLeft: 12,
            }}
          >
            {item.title}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
