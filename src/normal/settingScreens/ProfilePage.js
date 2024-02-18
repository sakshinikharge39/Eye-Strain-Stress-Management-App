import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const ProfilePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [photo, setPhoto] = useState(null); // Added photo state

  const handlePhotoSelect = (profileType) => {
    // Implement logic to set the selected profile type
    setSelectedProfile(profileType);
  };

  const handlePhotoUpload = () => {
    // Implement your photo upload logic here
    // For simplicity, setting a placeholder image based on the selected profile
    const placeholderImage =
      selectedProfile === "boy"
        ? "https://example.com/boy-placeholder-image.jpg"
        : "https://example.com/girl-placeholder-image.jpg";
    setPhoto(placeholderImage);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={() => handlePhotoSelect("boy")}>
          <Image
            source={{ uri: "https://example.com/boy-icon.jpg" }}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePhotoSelect("girl")}>
          <Image
            source={{ uri: "https://example.com/girl-icon.jpg" }}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          value={age}
          onChangeText={(text) => setAge(text)}
          keyboardType="numeric"
        />

        <Button title="Upload Photo" onPress={handlePhotoUpload} />

        {photo && <Image source={{ uri: photo }} style={styles.profileImage} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    display: "flex",
    flexDirection: "row", // Horizontal layout
    justifyContent: "center",
  },
  profileContainer: {
    // flex: 1,
    marginRight: 10, // Adjust as needed
    justifyContent: "center",
    marginTop: 40,
    alignItems: "center",
  },
  formContainer: {
    flex: 1,
    marginLeft: 10, // Adjust as needed
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  profileIcon: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 50,
    margin: 10,
  },
  profileImage: {
    marginTop: 20,
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 100,
  },
});

export default ProfilePage;
