// import React from "react";
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// export default function WelcomeScreen() {
//   const navigation = useNavigation();

//   const onPressLearnMore = () => {
//     // Navigate to the home page (replace 'Home' with the name of your home screen)
//     navigation.navigate("Login");
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.content}>
//         <Image
//           source={{
//             uri: "https://th.bing.com/th/id/R.4232f2034d0d8a05c624c48d8fc7647e?rik=hZ%2f3q6PymRb5kQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2feye%2fsmall%2feye_PNG35675.png&ehk=VhDXWnZdHc9lYOzzjy9iWIt31wEqZSqkLz0UjPNjRhQ%3d&risl=&pid=ImgRaw&r=0",
//           }}
//           style={styles.imageStyle}
//         />
//         <Text style={styles.textStyle}>
//           Never take your eye health for granted!
//         </Text>
//         <Text style={styles.mintextStyle}>Take Care!</Text>
//         <TouchableOpacity onPress={onPressLearnMore} style={styles.buttonStyle}>
//           <Text style={styles.buttonText}>Welcome</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   content: {
//     alignItems: "center",
//   },
//   imageStyle: {
//     height: 300,
//     width: 300,
//   },
//   textStyle: {
//     fontSize: 20,
//     marginTop: 24,
//   },
//   mintextStyle: {
//     fontSize: 16,
//     marginTop: 14,
//     marginBottom: 12,
//   },
//   buttonStyle: {
//     backgroundColor: "#841584",
//     borderRadius: 20,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 18,
//     textAlign: "center",
//   },
// });

import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Animated,
  Image,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const RotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startImageRotationFunction();
  }, []);

  const startImageRotationFunction = () => {
    RotateValue.setValue(0);
    Animated.timing(RotateValue, {
      toValue: 3,
      duration: 5000,
      useNativeDriver: false,
      repeat: -1,
    }).start();
  };

  const rotateImage = () => {
    startImageRotationFunction();
  };

  const RotateData = RotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const onPressLearnMore = () => {
    Alert.alert("Welcome to EyeStrength");
    setTimeout(() => {
      navigation.navigate("Login");
    }, 2000);
    rotateImage();
  };

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Animated.Image
        style={{
          width: 350,
          height: 350,
          transform: [{ rotate: RotateData }],
          marginTop: 70,
        }}
        source={{
          uri: "https://th.bing.com/th/id/R.4232f2034d0d8a05c624c48d8fc7647e?rik=hZ%2f3q6PymRb5kQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2feye%2fsmall%2feye_PNG35675.png&ehk=VhDXWnZdHc9lYOzzjy9iWIt31wEqZSqkLz0UjPNjRhQ%3d&risl=&pid=ImgRaw&r=0",
        }}
      />
      <View
        style={{
          display: "flex",
          // alignItems: "center",

          // backgroundColor: "blue",
          marginTop: 120,
        }}
      >
        <Text style={{ fontSize: 18 }}>
          Never take your eye health for granted!
        </Text>
        <View style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
          <TouchableOpacity
            onPress={onPressLearnMore}
            style={{
              backgroundColor: "#841584",
              display: "flex",
              alignItems: "center",
              margin: 10,
              padding: 20,
              width: 180,
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "800", color: "white" }}>
              Welcome
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default WelcomeScreen;
