
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import { useContext } from "react";
import { router } from "expo-router";

import { ProductContext } from "../../context/ProductContext";

export default function ProductList() {
  const { products } = useContext(ProductContext);

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => router.back()}>
                <Text style={styles.back}>← Back</Text>
              </TouchableOpacity>
      <Text style={styles.heading}>Products</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.empty}>No products added yet</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>₹ {item.price}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF1F6",
    padding: 15,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  empty: {
    textAlign: "center",
    marginTop: 50,
    color: "#777",
    fontSize: 16,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 10,
    marginBottom: 12,
    elevation: 4,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
    backgroundColor: "#f1f1f1",
  },
  info: {
    flex: 1,
    paddingLeft: 12,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  price: {
    fontSize: 15,
    color: "#ff7b00",
    marginTop: 6,
    fontWeight: "bold",
  },
});
