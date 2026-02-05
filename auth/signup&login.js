import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
// import { Routers } from 'react-router-dom'
import { useRouter } from "expo-router";


function Signup() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profile}>
        <FontAwesome name="user-circle" size={90} color="#4A90E2" />
        <Text style={styles.name}>My Account</Text>
        <Text style={styles.email}>user@email.com</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.sectionTitle}>Options</Text>
        <TouchableOpacity style={styles.option}>
          <FontAwesome name="shopping-bag" size={18} color="#444" />
          <Text style={styles.optionText}>My Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <FontAwesome name="heart" size={18} color="#444" />
          <Text style={styles.optionText}>Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <FontAwesome name="map-marker" size={18} color="#444" />
          <Text style={styles.optionText}>Saved Address</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <FontAwesome name="credit-card" size={18} color="#444" />
          <Text style={styles.optionText}>Payment Methods</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <FontAwesome name="life-ring" size={18} color="#444" />
          <Text style={styles.optionText}>Help Center</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <FontAwesome name="cog" size={18} color="#444" />
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <FontAwesome name="sign-out" size={18} color="#444" />
          <Text style={styles.optionText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}


export default function AuthWelcomeFresh() {
  const [showLogin, setShowLogin] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

   const router = useRouter()
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");

  
  const isFormValid = showLogin
    ? email !== "" && password !== ""
    : fullName !== "" && email !== "" && password !== "";

    // const hanleLogin = () => {
    //   if (!isFormValid)
    // }
    const handleLogin = () => {
  if (!isFormValid) return;
  router.replace("/(drawer)/(tabs)/home");
};


  // if (loggedIn) return <Signup />;

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.topBox}>
        <FontAwesome name="shopping-bag" size={50} color="#fff" />
        <Text style={styles.appName}>Admin Panel</Text>
        <Text style={styles.tagline}>Manage • Sell</Text>
      </View>

     
      <View style={styles.card}>
      
        <View style={styles.toggleRow}>
          <TouchableOpacity
            style={[styles.toggleBtn, showLogin && styles.activeToggle]}
            onPress={() => setShowLogin(true)}
          >
            <Text style={[styles.toggleText, showLogin && styles.activeText]}>
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.toggleBtn, !showLogin && styles.activeToggle]}
            onPress={() => setShowLogin(false)}
          >
            <Text style={[styles.toggleText, !showLogin && styles.activeText]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        
        {!showLogin && (
          <TextInput
            placeholder="Full Name"
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
          />
        )}

        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          placeholder="Contact"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setContact}
        />

        <TouchableOpacity
          style={[styles.mainBtn, !isFormValid && { opacity: 0.6 }]}
          onPress={handleLogin}
        >
          <Text style={styles.mainBtnText}>
            {showLogin ? "Login" : "Create Account"}
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>Continue to explore amazing deals </Text>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f2f4f7" },
  topBox: {
    height: 220,
    backgroundColor: "#ff7b00",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
  },
  appName: { color: "#fff", fontSize: 28, fontWeight: "bold", marginTop: 10 },
  tagline: { color: "#fff", fontSize: 14, marginTop: 5 },
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    elevation: 5,
  },
  toggleRow: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    borderRadius: 30,
    marginBottom: 20,
    padding: 5,
  },
  toggleBtn: { flex: 1, padding: 10, borderRadius: 30, alignItems: "center" },
  activeToggle: { backgroundColor: "#ff7b00" },
  toggleText: { fontSize: 15, fontWeight: "bold", color: "#555" },
  activeText: { color: "#fff" },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  mainBtn: {
    backgroundColor: "#ff7b00",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 5,
  },
  mainBtnText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  footer: { textAlign: "center", marginTop: 20, color: "#777" },
  profile: {
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
    borderRadius: 15,
    marginBottom: 10,
    elevation: 2,
  },
  name: { fontSize: 20, fontWeight: "bold", marginTop: 8 },
  email: { fontSize: 14, color: "#666" },
  box: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    elevation: 1,
  },
  sectionTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  option: { flexDirection: "row", alignItems: "center", paddingVertical: 12 },
  optionText: { marginLeft: 12, fontSize: 15 },
});
