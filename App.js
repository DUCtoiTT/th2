import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import applePayIcon from "./assets/Appleicon.png";
import backIcon from "./assets/back-icon.png";
import anh from "./assets/anh.png";

const Stack = createStackNavigator();

const PaymentScreen = ({ navigation }) => {
  const [cardNumber, setCardNumber] = useState('5261   4141   0151   8472');
  const [name, setName] = useState("Christie Doe");
  const [expiry, setExpiry] = useState("06   /   2024");
  const [cvv, setCvv] = useState("915");

  return (
    <View style={styles.container}>
      <View style={styles.header  }>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={backIcon} style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={styles.title}>Checkout 💳</Text>
      <Text style={styles.title1}>₹ 1,527</Text>
      <Text style={styles.title2}>Including GST (18%)</Text>
      <View style={styles.paymentOptions}>
          <TouchableOpacity style={styles.creditCardButton}>
            {/* //<Image source={creditCardIcon} style={styles.paymentIcon} /> */}
            <Text style={styles.paymentText}>Credit Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.applePayButton}>
            <Image source={applePayIcon} style={styles.paymentIcon} />
            <Text style={styles.paymentText}>Apple Pay</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.giua}>
      <Text>Card number</Text>
      <TextInput
        style={styles.input}
        placeholder="Card number"
        keyboardType="numeric"
        value={cardNumber}
        onChangeText={setCardNumber}
      />
      <Text>Cardholder name</Text>
      <TextInput
        style={styles.input}
        placeholder="Cardholder name"
        value={name}
        onChangeText={setName}
      />
      <Text>Expiry date</Text>
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="MM/YY"
          keyboardType="numeric"
          value={expiry}
          onChangeText={setExpiry}
        />
        <Text>CVV / CVC</Text>
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="CVV"
          keyboardType="numeric"
          value={cvv}
          onChangeText={setCvv}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Success")}> 
        <Text style={styles.buttonText}>Pay for the order</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const SuccessScreen = () => {
  return (
    <View style={styles.container1}>
      <Image source={{ anh }} style={styles.image} />
      <Text style={styles.title}>Payment Success, Yayy!</Text>
      <Text style={styles.subtitle}>We will send order details and invoice to your email.</Text>
      <TouchableOpacity style={styles.linkButton}>
        <Text style={styles.linkText}>Check Details →</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadButtonText}>Download Invoice</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { width:340.61, height: 790,top: 14, left: 19.98 },
  title: { width: 130, height:32, top:70, left:22, fontWeight:700, fontSize: 22, },
  title1:{ width: 66, height: 29, top:30, left:288, fontWeight: 700, fontSize:20, color:"#25D482"},
  title2:{width:126, height:21,top:40,left:229,fontWeight:400,fontSize:14, color:"#B1B1B1"},
  backButton:{ width:45, height:44, top: 57, left: 20, borderRadius: 9},
  subtitle: { fontSize: 16, color: "gray", textAlign: "center", marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#ddd", padding: 10, borderRadius: 10, marginBottom: 10 },
  row: { flexDirection: "row", justifyContent: "space-between" },
  halfInput: { width: "48%" },
  button: { backgroundColor: "#2ecc71", padding: 15, borderRadius: 10, alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  image: { width: 100, height: 100, alignSelf: "center", marginBottom: 20 },
  linkButton: { marginVertical: 10 },
  linkText: { color: "#3498db", fontSize: 16, textAlign: "center" },
  downloadButton: { backgroundColor: "#3498db", padding: 15, borderRadius: 10, alignItems: "center" },
  downloadButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  paymentOptions: { flexDirection: "row", justifyContent: "center",top:50, marginTop: 20, backgroundColor: "#f5f5f5", borderRadius: 15, padding: 10 },
  creditCardButton: { flexDirection: "row", alignItems: "center", backgroundColor: "#2ecc71", padding: 15, borderRadius: 10, marginRight: 10, flex: 1, justifyContent: "center" },
  applePayButton: { flexDirection: "row", alignItems: "center", backgroundColor: "#fff", padding: 15, borderRadius: 10, flex: 1, justifyContent: "center", shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 5, elevation: 3 },
  paymentText: { fontWeight: "bold", marginLeft: 8 },
  paymentIcon: { width: 20, height: 20, resizeMode: "contain" },
  backButton: { position: "absolute", left: 20, top: 10 },
  backIcon: { width: 24, height: 24 },
  header:{width:375,height:253,borderBottomRightRadius:30,borderBottomLeftRadius:30, },
  container1: { flex: 1, padding: 24, justifyContent: "center", backgroundColor: "#fff" },
});
