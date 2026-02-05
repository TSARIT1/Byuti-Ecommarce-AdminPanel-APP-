// import { View, Text, TextInput, Button } from "react-native";
// import { useContext, useState } from "react";

// import { ProductContext } from "../../context/ProductContext";



// export default function AddProduct() {
//   const { products, setProducts } = useContext(ProductContext);

//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");

//   const addProduct = () => {
//     if (!name || !price) return;

//     setProducts([
//       ...products,
//       {
//         id: Date.now(),
//         name,
//         price,
//       },
//     ]);

//     setName("");
//     setPrice("");
//   };

//   return (
//     <View style={{ padding: 20 }}>
//       <Text>Add Product</Text>

//       <TextInput
//         placeholder="Product Name"
//         value={name}
//         onChangeText={setName}
//       />

//       <TextInput
//         placeholder="Price"
//         value={price}
//         onChangeText={setPrice}
//         keyboardType="numeric"
//       />

//       <Button title="Add Product" onPress={addProduct} />
//     </View>
//   );
// }


import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { useContext, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { ProductContext } from "../../context/ProductContext";
import { router } from "expo-router";

export default function AddProduct() {
  const { products, setProducts } = useContext(ProductContext);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const addProduct = () => {
    if (!name || !price || !image) return;

    setProducts([
      ...products,
      { id: Date.now(), name, price, image },
    ]);

    setName("");
    setPrice("");
    setImage(null);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => router.back()}>
                        <Text style={styles.back}>← Back</Text>
                      </TouchableOpacity>
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Add Product</Text>
        <Text style={styles.headerSub}>
          Upload product details & image
        </Text>
      </View>

    
      <View style={styles.card}>
        
        <TouchableOpacity style={styles.imageBox} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <Text style={styles.imagePlaceholder}>+ Add Image</Text>
          )}
        </TouchableOpacity>

        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Product Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Nike Shoes"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Price</Text>
          <TextInput
            style={styles.input}
            placeholder="₹ 1999"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.addBtn} onPress={addProduct}>
          <Text style={styles.addBtnText}>ADD PRODUCT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF1F6",
  },
  header: {
    backgroundColor: "#ff7b00",
    padding: 25,
    paddingBottom: 60,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    color: "#000000ff",
    fontSize: 24,
    fontWeight: "bold",
  },
  headerSub: {
    color: "#000000ff",
    marginTop: 6,
  },
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: -40,
    borderRadius: 18,
    padding: 20,
    elevation: 6,
  },
  imageBox: {
    height: 180,
    backgroundColor: "#F4F4F5",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  imagePlaceholder: {
    color: "#777",
    fontSize: 16,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 14,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    color: "#555",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#F9FAFB",
    borderRadius: 10,
    padding: 14,
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  addBtn: {
    backgroundColor: "#ff7b00",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  addBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
