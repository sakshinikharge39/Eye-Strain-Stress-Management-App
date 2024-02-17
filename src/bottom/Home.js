import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home() {
  const [currentCategory, setCurrentCategory] = useState(null);

  const renderAppsForCategory = () => {
    switch (currentCategory) {
      case "Entertainment":
        return ["Movie App 1", "Movie App 2", "Movie App 3"];
      case "Message":
        return ["Message App 1", "Message App 2", "Message App 3"];
      case "Games":
        return ["Game App 1", "Game App 2", "Game App 3"];
      default:
        return [];
    }
  };

  const renderCategory = (
    categoryName,
    icon,
    backgroundColor,
    subcategories
  ) => {
    const apps = renderAppsForCategory();

    const openCategory = () => {
      setCurrentCategory(categoryName);

      // Set a timeout to close the category after 10 seconds
      setTimeout(() => {
        setCurrentCategory(null);
      }, 10000);
    };

    return (
      <Pressable onPress={openCategory}>
        <View
          style={{
            padding: 10,
            margin: 5,
            backgroundColor: backgroundColor,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 1,
              borderColor: "black",
              alignItems: "center",
            }}
          >
            <Text style={{ padding: 5, fontWeight: "bold", fontSize: 22 }}>
              {categoryName}
            </Text>
            <MaterialIcons
              name={icon}
              size={44}
              color="black"
              style={{ padding: 10 }}
            />
          </View>
          <View style={styles.innerblock}>
            {subcategories.map((subcategory, index) => (
              <Text key={index} style={styles.inner}>
                {subcategory}
              </Text>
            ))}
          </View>
          {currentCategory === categoryName && (
            <View style={styles.innerblock}>
              {apps.map((appName, index) => (
                <Text key={index} style={styles.inner}>
                  {appName}
                </Text>
              ))}
            </View>
          )}
        </View>
      </Pressable>
    );
  };

  return (
    <View>
      <ScrollView>
        <View style={{ border: 1, borderColor: "black" }}>
          <Text style={styles.heading}>Welcome back, User!</Text>

          <View style={styles.otherBlock}>
            <Text
              style={{
                flexGrow: 1,
                fontSize: 20,
                marginTop: 30,
                marginLeft: 8,
              }}
            >
              Categories
            </Text>
            {renderCategory("Entertainment", "movie-creation", "pink", [
              "Action",
              "Comedy",
              "Drama",
            ])}
            {renderCategory("Message", "message", "purple", [
              "Personal",
              "Work",
              "Friends",
            ])}
            {renderCategory("Games", "videogame-asset", "lightgreen", [
              "Action",
              "Adventure",
              "Sports",
            ])}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  heading: {
    flexGrow: 1,
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 25,
    textAlign: "center", // Center text horizontally
    textAlignVertical: "center", // Center text vertically
  },
  otherBlock: {
    border: "3",
    borderColor: "black",
  },
  blocks: {
    backgroundColor: "pink",
    margin: 12,
    borderRadius: 7,
    width: "100%",
  },
  all: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  innerblock: {
    marginLeft: 18,
    padding: 10,
  },
  inner: {
    fontSize: 18,
    color: "red",
    fontWeight: "bold",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 4,
  },
});
