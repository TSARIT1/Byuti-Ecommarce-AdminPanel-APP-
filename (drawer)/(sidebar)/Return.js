import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { router } from "expo-router";

export default function ReturnsPage() {
  const [activeTopTab, setActiveTopTab] = useState("ReturnTracking");
  const [activeStatus, setActiveStatus] = useState("In Transit");
  const [openFilter, setOpenFilter] = useState(null);

  const [filters, setFilters] = useState({
    created: "Return Created",
    date: "Expected Delivery Date",
    type: "Return Type",
  });

  const selectFilter = (key, value) => {
    setFilters({ ...filters, [key]: value });
    setOpenFilter(null);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f5f7fb" }}>
          <TouchableOpacity onPress={() => router.back()}>
                            <Text style={styles.back}>← Back</Text>
                          </TouchableOpacity>
      
      <View style={styles.topTabs}>
        {[
          { key: "Overview", label: "Overview" },
          { key: "ReturnTracking", label: "Return Tracking" },
          { key: "ClaimTracking", label: "Claim Tracking" },
        ].map((tab) => (
          <TouchableOpacity
            key={tab.key}
            onPress={() => setActiveTopTab(tab.key)}
            style={[
              styles.topTab,
              activeTopTab === tab.key && styles.activeTopTab,
            ]}
          >
            <Text
              style={[
                styles.topTabText,
                activeTopTab === tab.key && styles.activeTopTabText,
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      
      <ScrollView style={{ padding: 12 }}>
       
        {activeTopTab === "Overview" && (
          <View style={styles.card}>
            <Text style={styles.heading}>Overview</Text>
            <Text style={{ color: "#666", marginTop: 6 }}>
              Return & RTO summary will appear here.
            </Text>
          </View>
        )}

       
        {activeTopTab === "ClaimTracking" && (
          <View style={styles.card}>
            <Text style={styles.heading}>Claim Tracking</Text>
            <Text style={{ color: "#666", marginTop: 6 }}>
              No claims available right now.
            </Text>
          </View>
        )}

        
        {activeTopTab === "ReturnTracking" && (
          <>
            
            <View style={styles.statusRow}>
              {[
                "In Transit",
                "Out for Delivery",
                "Delivered",
                "Lost",
                "Disposed",
              ].map((status) => (
                <TouchableOpacity
                  key={status}
                  onPress={() => setActiveStatus(status)}
                  style={[
                    styles.statusTab,
                    activeStatus === status && styles.activeStatusTab,
                  ]}
                >
                  <Text
                    style={
                      activeStatus === status
                        ? styles.activeStatusText
                        : styles.statusText
                    }
                  >
                    {status}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            
            <View style={styles.filterRow}>
              {[
                { key: "created", label: filters.created },
                { key: "date", label: filters.date },
                { key: "type", label: filters.type },
              ].map((item) => (
                <View key={item.key}>
                  <TouchableOpacity
                    style={styles.filterBox}
                    onPress={() =>
                      setOpenFilter(openFilter === item.key ? null : item.key)
                    }
                  >
                    <Text>{item.label} ⌄</Text>
                  </TouchableOpacity>

                  {openFilter === item.key && (
                    <View style={styles.dropdown}>
                      {[
                        "Today",
                        "Last 7 Days",
                        "Last 30 Days",
                        "Custom",
                      ].map((op) => (
                        <TouchableOpacity
                          key={op}
                          onPress={() => selectFilter(item.key, op)}
                        >
                          <Text style={styles.dropItem}>{op}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  )}
                </View>
              ))}
            </View>

            
            <View style={styles.empty}>
              <Text style={{ fontSize: 44 }}>Empty</Text>
              <Text style={{ marginTop: 8, color: "#666" }}>
                No data as of now.
              </Text>
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  topTabs: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  topTab: {
    marginRight: 20,
    paddingBottom: 8,
  },
  activeTopTab: {
    borderBottomWidth: 2,
    borderColor: "#ff7b00",
  },
  topTabText: {
    color: "#777",
    fontSize: 14,
  },
  activeTopTabText: {
    color: "#ff7b00",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
  },
  statusRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 12,
  },
  statusTab: {
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 6,
    marginRight: 8,
    marginBottom: 6,
  },
  activeStatusTab: {
    backgroundColor: "#ff7b00",
  },
  statusText: {
    color: "#444",
    fontSize: 12,
  },
  activeStatusText: {
    color: "#fff",
    fontSize: 12,
  },
  filterRow: {
    flexDirection: "row",
    marginBottom: 20,
  },
  filterBox: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 6,
    marginRight: 8,
  },
  dropdown: {
    backgroundColor: "#fff",
    marginTop: 4,
    borderRadius: 6,
    elevation: 4,
  },
  dropItem: {
    padding: 8,
    borderBottomWidth: 0.5,
    borderColor: "#eee",
  },
  empty: {
    alignItems: "center",
    marginTop: 60,
  },
});
