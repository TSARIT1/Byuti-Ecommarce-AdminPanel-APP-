import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { router } from "expo-router"; 

export default function Logout() {
  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "You have been logged out!",
      [
        {
          text: "OK",
          onPress: () => router.replace("/login"),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      
      <TouchableOpacity onPress={() => router.back()}>
              <Text style={styles.back}>← Back</Text>
            </TouchableOpacity>

      <View style={styles.box}>
        <Text style={styles.title}>Logout</Text>
        <Text style={styles.text}>
          Are you sure you want to logout from your account?
        </Text>

        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutText}>Yes, Logout</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 12,
    width: "85%",
    alignItems: "center",
    elevation: 5,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
  },

  text: {
    fontSize: 15,
    color: "#555",
    textAlign: "center",
    marginBottom: 25,
  },

  logoutBtn: {
    width: "100%",
    backgroundColor: "#ff2929",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },

  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  cancel: {
    color: "#333",
    fontWeight: "bold",
  },

  closeBtn: {
    position: "absolute",
    top: 30,
    right: 25,
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 8,
    elevation: 4,
  },

  closeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff2929",
  },
});

