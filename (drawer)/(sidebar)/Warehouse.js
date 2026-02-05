import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";


export default function Warehouse() {
  return (
    <ScrollView style={styles.container}>
    <TouchableOpacity onPress={() => router.back()}>
                <Text style={styles.back}>← Back</Text>
              </TouchableOpacity>
      <Text style={styles.title}>Join  Warehousing</Text>
      <Text style={styles.subtitle}>
        Join  Warehousing in 4 easy steps!
      </Text>

      <TouchableOpacity style={styles.joinBtn}>
        <Text style={styles.joinText}>Join Us Now</Text>
      </TouchableOpacity>

     
      <Section title="How it works">
        <Step text='Complete GST and APOB registration (We’ll help you)' />
        <Step text="Dispatch inventory to the warehouse" />
        <Step text="Inventory received & stored securely" />
        <Step text="Watch your business takeoff on " />
      </Section>

      <Section title="Benefits of  Warehouse">
        <Benefit
          title="Grow Sales by 9% - 11%"
          desc="Get upto Rs 5 customer discount without affecting margins"
        />
        <Benefit
          title="100% Protection from RTO & Return Frauds"
          desc="Guaranteed approval on all valid claims"
        />
        <Benefit
          title="Reduce Returns & Cancellations by 6% - 7%"
          desc="Expert handling reduces damages"
        />
        <Benefit
          title="Supercharge Operations"
          desc="Real-time inventory & performance insights"
        />
      </Section>

      <Section title="Warehouse Fees (Per Unit Charges)">
        <FeeRow label="Upto 150 gms" value="₹4 / ₹15" />
        <FeeRow label="151 - 500 gms" value="₹10 / ₹20" />
        <FeeRow label="501 - 1000 gms" value="₹13.5 / ₹27" />
        <FeeRow label="1001 - 2000 gms" value="₹28 / ₹40" />
        <FeeRow label="Above 2000 gms" value="₹38 / ₹67" />
      </Section>

     
      <Section title="One Time Charges per Warehouse Location">
        <FeeRow label="GST + APOB" value="₹9999 + GST" />
        <FeeRow label="VPOB Renewal" value="₹8000 + GST" />
        <FeeRow label="Only APOB" value="₹500 + GST" />
      </Section>
    </ScrollView>
  );
}

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function Step({ text }) {
  return <Text style={styles.step}>• {text}</Text>;
}

function Benefit({ title, desc }) {
  return (
    <View style={styles.benefitCard}>
      <Text style={styles.benefitTitle}>{title}</Text>
      <Text style={styles.benefitDesc}>{desc}</Text>
    </View>
  );
}

function FeeRow({ label, value }) {
  return (
    <View style={styles.feeRow}>
      <Text style={styles.feeLabel}>{label}</Text>
      <Text style={styles.feeValue}>{value}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fb",
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: "#555",
    marginBottom: 10,
  },
  joinBtn: {
    backgroundColor: "#ff7b00",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  joinText: {
    color: "#fff",
    fontWeight: "bold",
  },
  section: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 16,
    elevation: 2,
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  step: {
    fontSize: 12,
    marginBottom: 6,
  },
  benefitCard: {
    marginBottom: 10,
  },
  benefitTitle: {
    fontWeight: "600",
    fontSize: 13,
  },
  benefitDesc: {
    fontSize: 12,
    color: "#555",
  },
  feeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
    paddingVertical: 6,
  },
  feeLabel: {
    fontSize: 12,
  },
  feeValue: {
    fontSize: 12,
    fontWeight: "600",
  },
});
