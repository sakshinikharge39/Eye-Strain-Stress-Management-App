import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function BlinkRate() {
  return (
    <View style={{ margin: 10 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 16,
          marginTop: 40,
          backgroundColor: "#D788CF",
          borderRadius: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          Blink reminder Fixed
          <FontAwesome name="toggle-on" size={29} color="black" /> Smart
        </Text>
      </View>

      <View style={{ paddingLeft: 10, marginTop: 30 }}>
        <Text style={{ fontSize: 20, fontWeight: "600", color: "#888" }}>
          20-20-20 rule will be used: every 20 minutes, look at something 20
          feet away for 20 seconds. This alert message will be given to the
          user.
        </Text>
      </View>
      <TouchableOpacity>
        <View style={styles.card}>
          <Text style={styles.textStyle}>Stop</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: "#D788CF",
    marginVertical: 20,
    alignSelf: "center",
  },
  textStyle: {
    color: "white",
    fontSize: 44,
    fontWeight: "bold",
  },
});
