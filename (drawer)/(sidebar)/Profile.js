import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { router } from "expo-router";


export default function ProfilePage({ navigation }) {
  const [editable, setEditable] = useState(false);

  const [email, setEmail] = useState("official@gmail.com");
  const [phone, setPhone] = useState("+91 9876543210");
  const [address, setAddress] = useState("Mumbai, Maharashtra");
  const [memberSince] = useState("June 2000");
  const [gst] = useState("18%");

  const saveProfile = () => {
    setEditable(false);
    Alert.alert("Success", "Profile Updated Successfully!");
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
     
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Admin Profile</Text>
      <Text style={styles.subTitle}>
        Manage your account details & settings
      </Text>

      <View style={styles.card}>
        
        <View style={styles.leftCard}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
            }}
            style={styles.profileImg}
          />

          <Text style={styles.name}>Admin</Text>
          <Text style={styles.role}>E-Commerce Administrator</Text>

          <TouchableOpacity
            style={styles.editBtn}
            onPress={() => setEditable(true)}
          >
            <Text style={styles.editText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* RIGHT */}
        <View style={styles.rightCard}>
          <Text style={styles.infoTitle}>Personal Information</Text>

          <InfoRow
            label="Email"
            value={email}
            editable={editable}
            onChange={setEmail}
          />

          <InfoRow
            label="Phone"
            value={phone}
            editable={editable}
            onChange={setPhone}
          />

          <InfoRow
            label="Address"
            value={address}
            editable={editable}
            onChange={setAddress}
          />

          <InfoRow label="Member Since" value={memberSince} />
          <InfoRow label="GST" value={gst} />

          {editable && (
            <TouchableOpacity style={styles.saveBtn} onPress={saveProfile}>
              <Text style={styles.saveText}>Save Changes</Text>
            </TouchableOpacity>
          )}

          <View style={styles.divider} />

          <Text style={styles.infoTitle}>Dashboard Stats</Text>

          <View style={styles.statsGrid}>
            <StatBox title="12" label="Total Products" />
            <StatBox title="27" label="Total Orders" />
            <StatBox title="4" label="Pending Orders" />
            <StatBox title="₹4,560" label="Today’s Sales" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}



const InfoRow = ({ label, value, editable = false, onChange }) => (
  <View style={styles.infoRow}>
    <Text style={styles.infoLabel}>{label}:</Text>
    <TextInput
      value={value}
      editable={editable}
      onChangeText={onChange}
      style={[
        styles.infoInput,
        !editable && { backgroundColor: "#f1f1f1" },
      ]}
    />
  </View>
);

const StatBox = ({ title, label }) => (
  <View style={styles.statBox}>
    <Text style={styles.statValue}>{title}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fa",
    padding: 16,
  },

  closeBtn: {
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,
  },

  closeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff4a4a",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 10,
  },

  subTitle: {
    textAlign: "center",
    color: "#555",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    elevation: 4,
  },

  leftCard: {
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#eee",
    paddingBottom: 20,
  },

  profileImg: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
  },

  role: {
    color: "#777",
    marginBottom: 15,
  },

  editBtn: {
    backgroundColor: "#ff7b00",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  editText: {
    color: "#fff",
    fontWeight: "bold",
  },

  rightCard: {
    marginTop: 20,
  },

  infoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },

  infoRow: {
    marginBottom: 12,
  },

  infoLabel: {
    fontWeight: "600",
    marginBottom: 4,
  },

  infoInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 8,
  },

  saveBtn: {
    backgroundColor: "#28a745",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },

  saveText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },

  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 20,
  },

  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  statBox: {
    width: "48%",
    backgroundColor: "#fafafa",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#eee",
    alignItems: "center",
    marginBottom: 12,
  },

  statValue: {
    fontSize: 24,
    fontWeight: "bold",
  },

  statLabel: {
    color: "#555",
    textAlign: "center",
  },
});
