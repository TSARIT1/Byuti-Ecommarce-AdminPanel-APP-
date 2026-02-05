import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Customer() {
  const [search, setSearch] = useState("");

  const [customers, setCustomers] = useState([
    { id: 1, name: "Amit Sharma", email: "amit@gmail.com", phone: "9876543210", orders: 12 },
    { id: 2, name: "Priya Verma", email: "priya@gmail.com", phone: "9988776655", orders: 7 },
    { id: 3, name: "Rahul Singh", email: "rahul@gmail.com", phone: "9090909090", orders: 4 },
    { id: 4, name: "Neha Gupta", email: "neha@gmail.com", phone: "8811223344", orders: 9 },
  ]);

  const filteredCustomers = customers.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  
  const handleDelete = (id, name) => {
    Alert.alert(
      "Delete Customer",
      `Are you sure you want to delete ${name}?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            setCustomers(customers.filter((c) => c.id !== id));
          },
        },
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>

      
      <View style={styles.row}>
        <FontAwesome name="envelope" size={16} color="#ff7b00" />
        <Text style={styles.text}>{item.email}</Text>
      </View>

     
      <View style={styles.row}>
        <FontAwesome name="phone" size={16} color="#ff7b00" />
        <Text style={styles.text}>{item.phone}</Text>
      </View>

      
      <View style={styles.row}>
        <FontAwesome name="shopping-bag" size={16} color="#ff7b00" />
        <Text style={styles.text}>Orders: {item.orders}</Text>
      </View>

      <View style={styles.btnRow}>
        <TouchableOpacity style={styles.viewBtn}>
          <Text style={styles.btnText}>View</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteBtn}
          onPress={() => handleDelete(item.id, item.name)}
        >
          <Text style={styles.btnText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>

      <TouchableOpacity onPress={() => router.back()}>
              <Text style={styles.back}>← Back</Text>
            </TouchableOpacity>

      <Text style={styles.title}>Customer List</Text>
      <Text style={styles.subTitle}>
        All registered customers of your e-commerce store
      </Text>

      {/* SEARCH */}
      <TextInput
        placeholder="Search customer..."
        value={search}
        onChangeText={setSearch}
        style={styles.searchInput}
      />

      <FlatList
        data={filteredCustomers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
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
    fontWeight: "bold",
    color: "#ff2929",
  },

  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    color: "#ff7b00",
    marginTop: 50,
  },

  subTitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },

  searchBox: {
    marginBottom: 15,
  },

  searchInput: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },

  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },

  text: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },

  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  viewBtn: {
    backgroundColor: "#00b894",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 6,
  },

  deleteBtn: {
    backgroundColor: "#e63946",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 6,
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

