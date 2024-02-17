import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function BlinkRate() {
  const [isBlinkReminderOn, setBlinkReminder] = useState(false);

  const toggleBlinkReminder = () => {
    setBlinkReminder(!isBlinkReminderOn);
    // You can perform additional actions based on the state change
  };

  const stopButtonPressed = () => {
    if (isBlinkReminderOn) {
      setBlinkReminder(false);
    } else {
      console.log("Stop pressed when Blink reminder is already off");
    }
  };

  return (
    <View style={{ margin: 10 }}>
      <TouchableOpacity onPress={toggleBlinkReminder}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 16,
            marginTop: 40,
            backgroundColor: isBlinkReminderOn ? "#4CAF50" : "#D788CF",
            borderRadius: 20,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            Blink reminder {isBlinkReminderOn ? "On" : "Off"}{" "}
            <FontAwesome
              name={isBlinkReminderOn ? "toggle-on" : "toggle-off"}
              size={29}
              color="black"
            />
          </Text>
        </View>
      </TouchableOpacity>

      <View style={{ paddingLeft: 10, marginTop: 30 }}>
        <Text style={{ fontSize: 20, fontWeight: "600", color: "#888" }}>
          20-20-20 rule will be used: every 20 minutes, look at something 20
          feet away for 20 seconds. This alert message will be given to the
          user.
        </Text>
      </View>

      <TouchableOpacity onPress={stopButtonPressed}>
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
