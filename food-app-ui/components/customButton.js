import React from "react";
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';


const CustomButton=({title,onPress})=>{
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
};


const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF7000",
    height: "40%",
    width: "100%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    justifyContent: "center",

    backgroundColor: "transparent",
    height: "20%",
    width: "80%",
  },
});


export default CustomButton;