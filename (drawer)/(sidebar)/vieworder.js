import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { router } from "expo-router";

export default function Orders() {
  const orders = [
    {
      id: "ORD001",
      customer: "Rahul Sharma",
      product: "Smartphone A12",
      amount: "₹12,499",
      status: "Delivered",
      date: "02 Dec 2025",
    },
    {
      id: "ORD002",
      customer: "Priya Verma",
      product: "Wireless Earbuds",
      amount: "₹1,799",
      status: "Pending",
      date: "03 Dec 2025",
    },
    {
      id: "ORD003",
      customer: "Arjun Singh",
      product: "Sports Shoes",
      amount: "₹2,099",
      status: "Shipped",
      date: "03 Dec 2025",
    },
    {
      id: "ORD004",
      customer: "Neha Patel",
      product: "Laptop Bag",
      amount: "₹899",
      status: "Cancelled",
      date: "04 Dec 2025",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Delivered":
        return styles.delivered;
      case "Pending":
        return styles.pending;
      case "Shipped":
        return styles.shipped;
      case "Cancelled":
        return styles.cancelled;
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
        <Text style={styles.label}>Product:</Text>
        <Text>{item.product}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Amount:</Text>
        <Text>{item.amount}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Date:</Text>
        <Text>{item.date}</Text>
      </View>

      <View style={styles.footer}>
        <Text style={[styles.status, getStatusStyle(item.status)]}>
          {item.status}
        </Text>

        <TouchableOpacity style={styles.viewBtn}>
          <Text style={styles.viewBtnText}>View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>

      {/* CLOSE */}
      <TouchableOpacity onPress={() => router.back()}>
              <Text style={styles.back}>← Back</Text>
            </TouchableOpacity>

      <Text style={styles.title}>View Orders</Text>
      <Text style={styles.subTitle}>
        Check order status & customer details
      </Text>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
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
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
  },

  subTitle: {
    opacity: 0.7,
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff9f9",
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
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    color: "#fff",
    fontSize: 13,
  },

  delivered: { backgroundColor: "#28a745" },
  pending: { backgroundColor: "#ff9800" },
  shipped: { backgroundColor: "#007bff" },
  cancelled: { backgroundColor: "#f44336" },

  viewBtn: {
    backgroundColor: "#ff7b00",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 6,
  },

  viewBtnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
