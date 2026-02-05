import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import { router } from "expo-router";

export default function CancelOrder() {
  const orders = [
    { id: 101, customer: "Amit Sharma", item: "Smartphone", price: 12999, status: "Processing" },
    { id: 102, customer: "Priya Verma", item: "Shoes", price: 2499, status: "Shipped" },
    { id: 103, customer: "Rahul Singh", item: "Watch", price: 3499, status: "Pending" },
    { id: 104, customer: "Neha Gupta", item: "Headphones", price: 1999, status: "Processing" },
  ];

  const cancelOrder = (id) => {
    Alert.alert("Order Cancelled", `Order ${id} has been cancelled!`);
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Processing":
        return styles.processing;
      case "Pending":
        return styles.pending;
      case "Shipped":
        return styles.shipped;
      default:
        return {};
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.label}>Order ID:</Text>
        <Text>{item.id}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Customer:</Text>
        <Text>{item.customer}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Item:</Text>
        <Text>{item.item}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Price:</Text>
        <Text>₹{item.price}</Text>
      </View>

      <View style={styles.footer}>
        <Text style={[styles.status, getStatusStyle(item.status)]}>
          {item.status}
        </Text>

        <TouchableOpacity style={styles.cancelBtn} onPress={() => cancelOrder(item.id)} >
          <Text style={styles.cancelBtnText}>Cancel Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      
    <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.back}>← Back</Text>
          </TouchableOpacity>

      <Text style={styles.title}>Cancel Orders</Text>
      <Text style={styles.subTitle}>
        Manage refund requests and cancel customer orders
      </Text>

      <FlatList
        data={orders}
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
    color: "#ff2929",
    fontWeight: "bold",
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

  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
  },

  row: {
    flexDirection: "row",
    marginBottom: 6,
  },

  label: {
    fontWeight: "bold",
    width: 90,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  status: {
    fontWeight: "bold",
    fontSize: 14,
  },

  processing: {
    color: "#e67e22",
  },

  pending: {
    color: "#d35400",
  },

  shipped: {
    color: "#2ecc71",
  },

  cancelBtn: {
    backgroundColor: "#e63946",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 6,
  },

  cancelBtnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
