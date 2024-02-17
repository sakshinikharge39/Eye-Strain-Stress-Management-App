import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function Distance() {
  return (
    <View>
      <View style={{ margin: 10 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            backgroundColor: "#71A7F8",
            borderRadius: 20,
            marginTop: 40,
          }}
        >
          <Text style={{ fontSize: 26, fontWeight: "bold", color: "white" }}>
            Allow Notification{" "}
            <FontAwesome name="toggle-on" size={29} color="black" />
          </Text>
        </View>
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9356ccf28fff9e6b72a13580665f4bc1275aebf9266794c14ac5d98cd711699?apiKey=2a3c4bb6307643258a7e7c95a2590e5e",
          }}
          style={{
            alignSelf: "center",
            marginTop: 36,
            maxWidth: "100%",
            aspectRatio: 1.33,
            width: 289,
          }}
        />
        <Text
          style={{
            alignSelf: "center",
            marginTop: 52,
            fontSize: 28,
            fontWeight: "bold",
            color: "#787878",
          }}
        >
          The range bar indicates the distance between your eyes and your
          digital device.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
