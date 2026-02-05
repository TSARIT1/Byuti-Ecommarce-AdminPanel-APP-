import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";


export default function PaymentsScreen() {
  const [payments] = useState([
    { id: "1", amount: 1200, status: "Completed", date: "10 Jan 2026" },
    { id: "2", amount: 1800, status: "Upcoming", date: "15 Jan 2026" },
  ]);

  const upcomingPayments = payments.filter(p => p.status === "Upcoming");
  const completedPayments = payments.filter(p => p.status === "Completed");

  return (
    <ScrollView style={styles.container}>
        <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.back}>← Back</Text>
                  </TouchableOpacity>
      <Text style={styles.pageTitle}>Payments</Text>

     
      <View style={styles.row}>
        <PaymentBox
          title="Upcoming Payments"
          data={upcomingPayments}
          emptyText="No upcoming payments"
        />
        <PaymentBox
          title="Completed Payments"
          data={completedPayments}
          emptyText="No completed payments"
        />
      </View>

      
      <View style={styles.sectionBox}>
        <Text style={styles.sectionTitle}>Bank Details</Text>

        <TextInput style={styles.input} placeholder="Account Holder Name" />
        <TextInput style={styles.input} placeholder="Account Number" />
        <TextInput style={styles.input} placeholder="IFSC Code" />
        <TextInput style={styles.input} placeholder="Bank Name" />

        <TouchableOpacity style={styles.saveBtn}>
          <Text style={styles.saveText}>Save Bank Details</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.sectionBox}>
        <Text style={styles.sectionTitle}>KYC Documents</Text>

        <TextInput style={styles.input} placeholder="PAN Number" />
        <TextInput style={styles.input} placeholder="GST Number (Optional)" />

        <View style={styles.statusRow}>
          <Text>Status:</Text>
          <Text style={styles.pending}> Pending Verification</Text>
        </View>

        <TouchableOpacity style={styles.saveBtn}>
          <Text style={styles.saveText}>Submit Documents</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Important</Text>
        <Text style={styles.infoText}>
          Payments will be released only after successful bank & document
          verification.
        </Text>
      </View>
    </ScrollView>
  );
}


function PaymentBox({ title, data, emptyText }) {
  return (
    <View style={styles.paymentBox}>
      <Text style={styles.boxTitle}>{title}</Text>

      {data.length === 0 ? (
        <Text style={styles.emptyText}>{emptyText}</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.paymentRow}>
              <Text>₹ {item.amount}</Text>
              <Text style={styles.date}>{item.date}</Text>
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
    backgroundColor: "#f5f7fb",
    padding: 16,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  paymentBox: {
    backgroundColor: "#fff",
    width: "48%",
    padding: 14,
    borderRadius: 10,
    elevation: 2,
  },
  boxTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 12,
    color: "#777",
    textAlign: "center",
    marginTop: 20,
  },
  paymentRow: {
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
    paddingVertical: 6,
  },
  date: {
    fontSize: 11,
    color: "#888",
  },


  sectionBox: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginTop: 18,
    elevation: 2,
  },
  sectionTitle: {
    fontWeight: "600",
    marginBottom: 10,
    fontSize: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    fontSize: 14,
  },
  saveBtn: {
    backgroundColor: "#ff7b00",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 6,
  },
  saveText: {
    color: "#fff",
    fontWeight: "600",
  },

  statusRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  pending: {
    color: "#ff9800",
    fontWeight: "600",
  },

  infoBox: {
    backgroundColor: "#eef2ff",
    padding: 14,
    borderRadius: 10,
    marginTop: 18,
  },
  infoTitle: {
    fontWeight: "600",
    marginBottom: 6,
  },
  infoText: {
    fontSize: 12,
    color: "#555",
  },
});
