// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
// } from "react-native";
// import { router } from "expo-router";

// export default function Orders() {
//   const orders = [
//     {
//       id: "ORD001",
//       customer: "Rahul Sharma",
//       product: "Smartphone A12",
//       amount: "₹12,499",
//       status: "Delivered",
//       date: "02 Dec 2025",
//     },
//     {
//       id: "ORD002",
//       customer: "Priya Verma",
//       product: "Wireless Earbuds",
//       amount: "₹1,799",
//       status: "Pending",
//       date: "03 Dec 2025",
//     },
//     {
//       id: "ORD003",
//       customer: "Arjun Singh",
//       product: "Sports Shoes",
//       amount: "₹2,099",
//       status: "Shipped",
//       date: "03 Dec 2025",
//     },
//     {
//       id: "ORD004",
//       customer: "Neha Patel",
//       product: "Laptop Bag",
//       amount: "₹899",
//       status: "Cancelled",
//       date: "04 Dec 2025",
//     },
//   ];

//   const getStatusStyle = (status) => {
//     switch (status) {
//       case "Delivered":
//         return styles.delivered;
//       case "Pending":
//         return styles.pending;
//       case "Shipped":
//         return styles.shipped;
//       case "Cancelled":
//         return styles.cancelled;
//       default:
//         return {};
//     }
//   };

//   const renderItem = ({ item }) => (
    
//     <View style={styles.card}>
        
//       <Text style={styles.row}><Text style={styles.label}>Order ID:</Text> {item.id}</Text>
//       <Text style={styles.row}><Text style={styles.label}>Customer:</Text> {item.customer}</Text>
//       <Text style={styles.row}><Text style={styles.label}>Product:</Text> {item.product}</Text>
//       <Text style={styles.row}><Text style={styles.label}>Amount:</Text> {item.amount}</Text>
//       <Text style={styles.row}><Text style={styles.label}>Date:</Text> {item.date}</Text>

//       <View style={styles.actionRow}>
//         <Text style={[styles.status, getStatusStyle(item.status)]}>
//           {item.status}
//         </Text>

//         <TouchableOpacity style={styles.viewBtn}>
//           <Text style={styles.viewText}>View</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={() => router.back()}>
//               <Text style={styles.back}>← Back</Text>
//             </TouchableOpacity>

//       <Text style={styles.title}>View Orders</Text>
//       <Text style={styles.subTitle}>
//         Check order status & customer details
//       </Text>

//       <FlatList
//         data={orders}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         showsVerticalScrollIndicator={false}
//       />
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//     padding: 16,
//   },

//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#000",
//     marginTop: 30,
//   },

//   subTitle: {
//     fontSize: 15,
//     opacity: 0.7,
//     marginBottom: 20,
//   },

//   card: {
//     backgroundColor: "#fff",
//     padding: 15,
//     borderRadius: 12,
//     marginBottom: 15,
//     elevation: 4,
//   },

//   row: {
//     fontSize: 14,
//     marginBottom: 4,
//   },

//   label: {
//     fontWeight: "bold",
//   },

//   actionRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 10,
//     alignItems: "center",
//   },

//   status: {
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//     borderRadius: 6,
//     color: "#fff",
//     fontSize: 12,
//   },

//   delivered: { backgroundColor: "#28a745" },
//   pending: { backgroundColor: "#ff9800" },
//   shipped: { backgroundColor: "#007bff" },
//   cancelled: { backgroundColor: "#f44336" },

//   viewBtn: {
//     backgroundColor: "#ff7b00",
//     paddingHorizontal: 14,
//     paddingVertical: 6,
//     borderRadius: 6,
//   },

//   viewText: {
//     color: "#fff",
//     fontWeight: "600",
//   },

//   closeBtn: {
//     position: "absolute",
//     top: 20,
//     right: 20,
//     backgroundColor: "#fff",
//     padding: 6,
//     borderRadius: 8,
//     elevation: 5,
//     zIndex: 1,
//   },

//   closeText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#ff2929",
//   },
// });


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
