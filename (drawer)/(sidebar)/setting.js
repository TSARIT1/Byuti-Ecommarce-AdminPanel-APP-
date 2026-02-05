import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Switch,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";

export default function Settings() {
  const handleSaveProfile = () => {
    Alert.alert("Success", "Profile Updated Successfully!");
  };

  const handleStoreUpdate = () => {
    Alert.alert("Success", "Store Settings Updated!");
  };

  const handleNotificationSave = () => {
    Alert.alert(
      "Confirm",
      "Are you sure you want to save notification settings?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "OK", onPress: () => Alert.alert("Saved", "Notifications Saved!") },
      ]
    );
  };

  const handlePasswordUpdate = () => {
    Alert.alert("Success", "Password Updated Successfully!");
  };

  return (
    <ScrollView style={styles.page}>

      {/* CLOSE BUTTON */}
      <TouchableOpacity onPress={() => router.back()}>
              <Text style={styles.back}>← Back</Text>
            </TouchableOpacity>

      <Text style={styles.title}>Settings</Text>
      <Text style={styles.subTitle}>
        Manage your account, store & system settings
      </Text>

      
      <View style={styles.box}>
        <Text style={styles.boxTitle}>Profile Settings</Text>

        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} placeholder="Enter your name" />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter your email" />

        <Text style={styles.label}>Phone</Text>
        <TextInput style={styles.input} placeholder="Enter phone number" />

        <TouchableOpacity style={styles.btn} onPress={handleSaveProfile}>
          <Text style={styles.btnText}>Save Changes</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.box}>
        <Text style={styles.boxTitle}>Store Settings</Text>

        <Text style={styles.label}>Store Name</Text>
        <TextInput style={styles.input} placeholder="Enter store name" />

        <Text style={styles.label}>Store Address</Text>
        <TextInput
          style={[styles.input, { height: 80 }]}
          placeholder="Enter store address"
          multiline
        />

        <TouchableOpacity style={styles.btn} onPress={handleStoreUpdate}>
          <Text style={styles.btnText}>Update Store</Text>
        </TouchableOpacity>
      </View>

     
      <View style={styles.box}>
        <Text style={styles.boxTitle}>Notification Settings</Text>

        <View style={styles.toggleRow}>
          <Text>Order Updates</Text>
          <Switch value />
        </View>

        <View style={styles.toggleRow}>
          <Text>Customer Messages</Text>
          <Switch />
        </View>

        <View style={styles.toggleRow}>
          <Text>Low Stock Alert</Text>
          <Switch value />
        </View>

        <TouchableOpacity style={styles.btn} onPress={handleNotificationSave}>
          <Text style={styles.btnText}>Save Notifications</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.box}>
        <Text style={styles.boxTitle}>Security</Text>

        <Text style={styles.label}>Old Password</Text>
        <TextInput style={styles.input} secureTextEntry />

        <Text style={styles.label}>New Password</Text>
        <TextInput style={styles.input} secureTextEntry />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput style={styles.input} secureTextEntry />

        <TouchableOpacity style={styles.btn} onPress={handlePasswordUpdate}>
          <Text style={styles.btnText}>Update Password</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 16,
  },

  closeBtn: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 10,
    elevation: 5,
    zIndex: 10,
  },

  closeText: {
    fontSize: 22,
    color: "#ff2929",
    fontWeight: "bold",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
  },

  subTitle: {
    opacity: 0.7,
    marginBottom: 20,
  },

  box: {
    backgroundColor: "#ffecec",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
  },

  boxTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  label: {
    fontWeight: "bold",
    marginTop: 10,
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 6,
    padding: 10,
    marginTop: 5,
  },

  toggleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },

  btn: {
    backgroundColor: "#ff7b00",
    padding: 12,
    borderRadius: 6,
    marginTop: 15,
  },

  btnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
