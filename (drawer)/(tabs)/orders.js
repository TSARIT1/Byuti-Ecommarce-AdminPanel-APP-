


import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const TABS = ["On Hold", "Pending", "Ready to Ship", "Shipped", "Cancelled"];

export default function OrdersScreen() {
  const [activeTab, setActiveTab] = useState("Pending");
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const orders = [
    {
      id: "ORD001",
      sku: "SKU123",
      date: "10 Jan 2026",
      status: "Pending",
    },
    {
      id: "ORD002",
      sku: "SKU456",
      date: "12 Jan 2026",
      status: "Shipped",
    },
  ];

  const filteredOrders = orders.filter(
    (o) => o.status === activeTab
  );

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.back}>← Back</Text>
                  </TouchableOpacity>
     
      <Text style={styles.title}>Orders</Text>

   
      <View style={styles.tabs}>
        {TABS.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[
              styles.tab,
              activeTab === tab && styles.activeTab,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      
      <View style={styles.filters}>
        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => setShowCalendar(true)}
        >
          <Text style={styles.filterText}>
            {selectedDate
              ? selectedDate.toDateString()
              : "Order Date"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterBtn}>
          <Text style={styles.filterText}>Dispatch Date</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterBtn}>
          <Text style={styles.filterText}>SLA Status</Text>
        </TouchableOpacity>
      </View>

      
      {showCalendar && (
        <DateTimePicker
          value={selectedDate || new Date()}
          mode="date"
          display="default"
          onChange={(event, date) => {
            setShowCalendar(false);
            if (date) setSelectedDate(date);
          }}
        />
      )}

      
      {filteredOrders.length === 0 ? (
        <Text style={styles.emptyText}>
          No orders found for this status
        </Text>
      ) : (
        <FlatList
          data={filteredOrders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.orderId}>{item.id}</Text>
              <Text style={styles.subText}>SKU: {item.sku}</Text>
              <Text style={styles.subText}>
                Order Date: {item.date}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6fb",
    padding: 14,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tabs: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#eaeaea",
    marginRight: 6,
    marginBottom: 6,
  },
  activeTab: {
    backgroundColor: "#ff7b00",
  },
  tabText: {
    fontSize: 12,
  },
  activeText: {
    color: "#fff",
    fontWeight: "600",
  },
  filters: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  filterBtn: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 6,
    elevation: 2,
  },
  filterText: {
    fontSize: 11,
  },
  card: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  orderId: {
    fontWeight: "bold",
  },
  subText: {
    fontSize: 12,
    color: "#555",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 40,
    color: "#777",
  },
});
