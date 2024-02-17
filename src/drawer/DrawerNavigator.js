import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Main from "./Screens/Distance";
import Main2 from "./BinkRate";
import Setting from "./Screens/Setting";
import BottomNavigation from "../bottom/BottomNavigation";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Eye Strain Detection"
          component={BottomNavigation}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Main2"
          component={Main2}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Setting1"
          component={Setting}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Setting2"
          component={Setting}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Setting"
          component={Setting}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
