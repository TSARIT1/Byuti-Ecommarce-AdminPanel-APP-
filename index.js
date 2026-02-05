// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView
// } from "react-native";

// export default function HomeScreen() {
//   const [open, setOpen] = useState(false);

//   return (
//     <View style={{ flex: 1 }}>

//       {/* 🔷 NAVBAR */}
//       <View style={styles.navbar}>
//         <Text style={styles.logo}>Admin Panel</Text>

//         <TouchableOpacity onPress={() => setOpen(!open)}>
//           <Text style={styles.menu}>☰</Text>
//         </TouchableOpacity>
//       </View>

//       {/* 🔷 NAV MENU */}
//       {open && (
//         <View style={styles.menuBox}>
//           <Text style={styles.link}>Home</Text>
//           <Text style={styles.link}>Profile</Text>
//           <Text style={styles.link}>Customers</Text>
//           <Text style={styles.link}>Orders</Text>
//           <Text style={styles.link}>Add Product</Text>
//           <Text style={styles.link}>Settings</Text>
//           <Text style={styles.link}>Logout</Text>
//         </View>
//       )}

//       {/* 🔷 DASHBOARD */}
//       <ScrollView style={styles.container}>

//         <Text style={styles.title}>E-Commerce Dashboard</Text>
//         <Text style={styles.sub}>Manage Products, Orders & Revenue</Text>

//         {/* Cards */}
//         <View style={styles.cards}>
//           <View style={[styles.card, { backgroundColor: "#ff6b6b" }]}>
//             <Text style={styles.count}>12</Text>
//             <Text>Total Products</Text>
//           </View>

//           <View style={[styles.card, { backgroundColor: "#51cf66" }]}>
//             <Text style={styles.count}>27</Text>
//             <Text>Total Orders</Text>
//           </View>

//           <View style={[styles.card, { backgroundColor: "#ffd43b" }]}>
//             <Text style={styles.count}>3</Text>
//             <Text>Pending Orders</Text>
//           </View>

//           <View style={[styles.card, { backgroundColor: "#339af0" }]}>
//             <Text style={styles.count}>₹4,560</Text>
//             <Text>Today's Revenue</Text>
//           </View>
//         </View>

//         {/* Quick Actions */}
//         <View style={styles.box}>
//           <Text style={styles.boxTitle}>Quick Actions</Text>

//           <TouchableOpacity style={styles.btn}>
//             <Text>Add Product</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.btn}>
//             <Text>View Orders</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.btn}>
//             <Text>Notification Test</Text>
//           </TouchableOpacity>
//         </View>

//       </ScrollView>
//     </View>
//   );
// }

// /* 🔷 STYLES */
// const styles = StyleSheet.create({
//   navbar: {
//     backgroundColor: "#222",
//     padding: 15,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center"
//   },
//   logo: {
//     color: "#fff",
//     fontSize: 20,
//     fontWeight: "bold"
//   },
//   menu: {
//     color: "#fff",
//     fontSize: 26
//   },
//   menuBox: {
//     backgroundColor: "#333",
//     padding: 10
//   },
//   link: {
//     color: "#fff",
//     paddingVertical: 6
//   },
//   container: {
//     padding: 15
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: "bold"
//   },
//   sub: {
//     color: "#555",
//     marginBottom: 15
//   },
//   cards: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between"
//   },
//   card: {
//     width: "48%",
//     padding: 15,
//     borderRadius: 8,
//     marginBottom: 10
//   },
//   count: {
//     fontSize: 20,
//     fontWeight: "bold"
//   },
//   box: {
//     backgroundColor: "#eee",
//     padding: 15,
//     borderRadius: 8,
//     marginTop: 15
//   },
//   boxTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 10
//   },
//   btn: {
//     backgroundColor: "#ddd",
//     padding: 12,
//     borderRadius: 6,
//     marginTop: 8,
//     alignItems: "center"
//   }
// });


// import { Redirect } from "expo-router";

// export default function TabsIndex() {
//   return <Redirect href="/(tabs)/home" />;
// }
import { Redirect } from "expo-router";

export default function TabsIndex() {
  return <Redirect href="auth/signup&login" />;
}


