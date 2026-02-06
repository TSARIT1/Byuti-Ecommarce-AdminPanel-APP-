


import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import FontAwesome from "react-native-vector-icons/FontAwesome";



export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#f4f6fb" }}>


      <View style={styles.header}>
        <Text style={styles.headerTitle}>Admin Panel</Text>
        <Text style={styles.headerSub}>Friday, 10 Jan 2026</Text>
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>


        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeText}>Hello, Admin <FontAwesome name="sign-out" size={18} color="#ff7b00" /></Text>
          <Text style={styles.welcomeSub}>
            Manage your store efficiently and track growth in real time.
          </Text>

          <TouchableOpacity style={styles.primaryBtn}>
            <Text style={styles.primaryBtnText}>View Reports</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Store Overview</Text>

        <View style={styles.cards}>
          <View style={[styles.card, styles.orange]}>
            <Text style={styles.cardValue}>12</Text>
            <Text style={styles.cardLabel}>Products</Text>
          </View>

          <View style={[styles.card, styles.green]}>
            <Text style={styles.cardValue}>27</Text>
            <Text style={styles.cardLabel}>Orders</Text>
          </View>

          <View style={[styles.card, styles.yellow]}>
            <Text style={styles.cardValue}>3</Text>
            <Text style={styles.cardLabel}>Pending</Text>
          </View>

          <View style={[styles.card, styles.blue]}>
            <Text style={styles.cardValue}>₹4,560</Text>
            <Text style={styles.cardLabel}>Revenue</Text>
          </View>
        </View>

        <View style={styles.performanceBox}>
          <Text style={styles.sectionTitle}>Performance Summary</Text>

          <View style={styles.performanceRow}>
            <Text><FontAwesome name="line-chart" size={18} color="#ff7b00" />Monthly Growth</Text>
            <Text style={styles.good}>+18%</Text>
          </View>

          <View style={styles.performanceRow}>
            <Text><FontAwesome name="archive" size={18} color="#ff7b00" />Order Success Rate</Text>
            <Text style={styles.good}>96%</Text>
          </View>

          <View style={styles.performanceRow}>
            <Text><FontAwesome name="times-circle" size={18} color="#ff4d4d" />Cancelled Orders</Text>
            <Text style={styles.bad}>4%</Text>
          </View>
        </View>

        <View style={styles.actionsBox}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>

          <View style={styles.actionRow}>
           
            <TouchableOpacity style={styles.actionBtn} onPress={() => router.push("/(drawer)/(tabs)/Addproduct")}>
            <Text> <FontAwesome name="plus-circle" size={18} color="#ff7b00" />  Add Product</Text>
            </TouchableOpacity>


         
            <TouchableOpacity style={styles.actionBtn} onPress={() => router.push("/(drawer)/(sidebar)/Customer")}>
            <Text> <FontAwesome name="users" size={18} color="#ff7b00" />  Customers</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.actionRow}>
            
            <TouchableOpacity style={styles.actionBtn} onPress={() => router.push("/(drawer)/(tabs)/orders")}>
            <Text><FontAwesome name="archive" size={18} color="#ff7b00" /> Orders</Text>
            </TouchableOpacity>

           <TouchableOpacity style={styles.actionBtn} onPress={() => router.push("/(drawer)/(sidebar)/Paymentscreen")}>
            <Text>Payments</Text>
            </TouchableOpacity>

          </View>
        </View>

        <View style={styles.activityBox}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>

          <Text style={styles.activity}>• New order placed by Rahul</Text>
          <Text style={styles.activity}>• Product “Shoes” stock updated</Text>
          <Text style={styles.activity}>• Payment of ₹1200 received</Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ff7b00",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 6, 
  },
  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },
  headerSub: {
    color: "#ffe6d0",
    marginTop: 4,
    fontSize: 12,
  },
  container: {
    padding: 16,
    margin:16
  },
  welcomeCard: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 16,
    marginTop: -40,
    elevation: 6,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "700",
    padding:20,
  },
  welcomeSub: {
    color: "#666",
    marginVertical: 10,
    fontSize: 13,
  },
  primaryBtn: {
    backgroundColor: "#ff7b00",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  primaryBtnText: {
    color: "#fff",
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 14,
  },
  cards: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    elevation: 4,
  },
  orange: { backgroundColor: "#ff7b00" },
  green: { backgroundColor: "#2ecc71" },
  yellow: { backgroundColor: "#f1c40f" },
  blue: { backgroundColor: "#3498db" },
  cardValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  cardLabel: {
    color: "#fff",
    marginTop: 4,
  },
  performanceBox: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    elevation: 4,
    marginTop: 10,
  },
  performanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 6,
  },
  good: {
    color: "green",
    fontWeight: "700",
  },
  bad: {
    color: "red",
    fontWeight: "700",
  },
  actionsBox: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    elevation: 4,
    marginTop: 16,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  actionBtn: {
    width: "48%",
    backgroundColor: "#fff4eb",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  activityBox: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    elevation: 4,
    marginTop: 16,
    marginBottom: 30,
  },
  activity: {
    fontSize: 13,
    color: "#555",
    marginTop: 6,
  },
});
