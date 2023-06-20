import React, { useState } from "react";
import {
  View,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  Button
} from "react-native";
import CustomButton from "../components/customButton";

const Login = () => {
  const handleButtonPress = () => {
    Alert.alert("Signup Button Pressed");
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/design/design-login.png")}
        style={styles.image}
      />
      <View style={styles.logintextStyleContainer}>
        <Text style={styles.logintextStyle}>Login</Text>
      </View>
      <View style={styles.accessContainer}>
        <Text style={styles.accessStyle}>Access account</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.fieldContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.labelStyle}>Phone Number</Text>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput style={styles.textInputStyle} />
          </View>
        </View>

        <View style={styles.fieldContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.labelStyle}>Email</Text>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput style={styles.textInputStyle} />
          </View>
        </View>
      </View>

      <CustomButton title="Press Me" onPress={handleButtonPress} />
      <View style={styles.footerContainer}>
        <Text style={styles.footerStyle}>
          Don’t have an account? Register
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
  },

  image: {
    position: "absolute",
    width: "100%",
    height: "30%",
  },

  logintextStyleContainer: {
    top: "4%",
    width: "20%",
    height: "10%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  logintextStyle: {
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
  },
  accessContainer: {
    top: "0%",
    width: "30%",
    height: "5%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  accessStyle: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
  },
  formContainer: {
    height: "40%",
    justifyContent: "center",

    marginTop: "20%", // Adjust the value to set the desired space between the image and the form
    width: "80%", // Adjust the width of the form container as needed

    backgroundColor: "transparent",
  },
  fieldContainer: {
    justifyContent: "center",
    marginBottom: "2%",
    backgroundColor: "transparent",
    height: "50%",
    marginTop: "-10%",

    // Adjust the value to set the space between each field container
  },
  labelContainer: {
    flex: 2,
    justifyContent: "center",
    marginBottom: "-12%",
    width: "100%",
    paddingHorizontal: 10,
  },
  textInputContainer: {
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    height: "40%",
    borderRadius: 15,
  },
  labelStyle: {
    fontSize: 16,
    fontStyle: "normal",
  },
  textInputStyle: {
    height: "60%",
    width: "90%",
    paddingHorizontal: 23,
  },
  footerContainer: {
    height: "5%",
    width: "70%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    left:"1%",
    bottom:"6.6%"
  },
  footerStyle:{
    fontSize:15,
    fontWeight:500,
    
  }
});

export default Login;
