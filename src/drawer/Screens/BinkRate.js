import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import { FontAwesome } from "@expo/vector-icons";
import * as Notifications from "expo-notifications";

export default function BlinkRate() {
  const [isBlinkReminderOn, setBlinkReminder] = useState(false);

  useEffect(() => {
    let blinkTimeout;

    const startBlinkTimer = async () => {
      await scheduleNotification();

      blinkTimeout = setTimeout(() => {
        showBlinkAlert();
        startBlinkTimer();
      }, 1 * 60 * 1000);
    };

    if (isBlinkReminderOn) {
      startBlinkTimer();
    }

    return () => {
      clearTimeout(blinkTimeout);
    };
  }, [isBlinkReminderOn]);

  const showBlinkAlert = async () => {
    const soundObject = new Audio.Sound();
    try {
      console.log("hello bro");
      await soundObject.loadAsync(require("../../../assets/audio.wav"));
      await soundObject.playAsync();
    } catch (error) {
      console.error("Error loading sound", error);
    }

    const countdown = Array.from(
      { length: 20 },
      (_, index) => index + 1
    ).reverse();
    for (const number of countdown) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(number);
    }

    await soundObject.stopAsync();
    await soundObject.unloadAsync();
  };

  const toggleBlinkReminder = () => {
    setBlinkReminder(!isBlinkReminderOn);
  };

  const stopButtonPressed = () => {
    if (isBlinkReminderOn) {
      setBlinkReminder(false);
    } else {
      console.log("Stop pressed when Blink reminder is already off");
    }
  };

  const scheduleNotification = async () => {
    try {
      console.log("Scheduling notification...");
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "20-20-20 Rule",
          body: "It's time to take a break! Look at something 20 feet away for 20 seconds.",
        },
        trigger: {
          seconds: 2 * 60,
        },
      });
      console.log("Notification scheduled successfully!");
    } catch (error) {
      console.error("Error scheduling notification:", error);
    }
  };

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("Received notification:", notification);
      }
    );

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={{ margin: 10 }}>
      <TouchableOpacity onPress={toggleBlinkReminder}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 16,
            marginTop: 40,
            backgroundColor: isBlinkReminderOn ? "#4CAF51" : "#D788CF",
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
