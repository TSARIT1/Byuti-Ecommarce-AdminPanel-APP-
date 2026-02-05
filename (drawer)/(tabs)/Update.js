import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";

export default function UpdateProduct({ navigation }) {
  const [showPopup, setShowPopup] = useState(false);

  const updateProduct = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      {/* Close Button */}
     <TouchableOpacity onPress={() => router.back()}>
             <Text style={styles.back}>← Back</Text>
           </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.title}>Update Product</Text>

          {/* Product Name */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Product Name</Text>
            <View style={styles.inputWrap}>
              <FontAwesome5 name="tag" size={16} color="#ff7b00" />
              <TextInput
                placeholder="Enter product name"
                style={styles.input}
              />
            </View>
          </View>

          {/* Price */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Price</Text>
            <View style={styles.inputWrap}>
              <FontAwesome5 name="rupee-sign" size={16} color="#ff7b00" />
              <TextInput
                placeholder="Enter price"
                keyboardType="numeric"
                style={styles.input}
              />
            </View>
          </View>

          {/* Category */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Category</Text>
            <View style={styles.inputWrap}>
              <FontAwesome5 name="layer-group" size={16} color="#ff7b00" />
              <TextInput
                placeholder="Electronics / Fashion / Grocery"
                style={styles.input}
              />
            </View>
          </View>

          {/* Stock */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Stock</Text>
            <View style={styles.inputWrap}>
              <FontAwesome5 name="box" size={16} color="#ff7b00" />
              <TextInput
                placeholder="Available stock"
                keyboardType="numeric"
                style={styles.input}
              />
            </View>
          </View>

          {/* Image */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Product Image</Text>
            <View style={styles.inputWrap}>
              <FontAwesome5 name="image" size={16} color="#ff7b00" />
              <Text style={styles.imageText}>Choose Image</Text>
            </View>
          </View>

          {/* Description */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              placeholder="Write product description"
              multiline
              numberOfLines={4}
              style={styles.textarea}
            />
          </View>

          {/* Button */}
          <TouchableOpacity style={styles.updateBtn} onPress={updateProduct}>
            <Text style={styles.updateText}>Update Product</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Success Popup */}
      <Modal transparent visible={showPopup}>
        <View style={styles.popupOverlay}>
          <View style={styles.popup}>
            <FontAwesome5
              name="check-circle"
              size={45}
              color="#00b906"
            />
            <Text style={styles.popupText}>
              Product Updated Successfully!
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },

  card: {
    backgroundColor: "#fff",
    margin: 20,
    padding: 22,
    borderRadius: 15,
    elevation: 4,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ff7b00",
    marginBottom: 20,
  },

  formGroup: {
    marginBottom: 18,
  },

  label: {
    fontWeight: "bold",
    marginBottom: 6,
  },

  inputWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderWidth: 2,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 12,
  },

  input: {
    flex: 1,
    fontSize: 15,
  },

  imageText: {
    fontSize: 15,
    color: "#999",
  },

  textarea: {
    borderWidth: 2,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 12,
    height: 100,
    textAlignVertical: "top",
  },

  updateBtn: {
    backgroundColor: "#ff7b00",
    padding: 14,
    borderRadius: 12,
    marginTop: 10,
  },

  updateText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  closeBtn: {
    position: "absolute",
    top: 25,
    right: 25,
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 8,
    elevation: 5,
    zIndex: 1,
  },

  closeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff2929",
  },

  popupOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  popup: {
    width: 280,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },

  popupText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
