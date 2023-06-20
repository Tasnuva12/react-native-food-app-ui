import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <Onboarding
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <View style={styles.imageContainer}>
                <Image
                  source={require("../../assets/onboarding/popcorn1.png")}
                  style={styles.imageStyle}
                />
              </View>
            ),
            title: (
              <View style={styles.titleContainer}>
                <Text style={styles.titleStyle}>Choose A Tasty Dish</Text>
              </View>
            ),
            subtitle: (
              <View style={styles.subtitleContainer}>
                <Text style={styles.subtitleStyle} numberOfLines={2}>
                  Order anything you want from your Favorite restaurant.
                </Text>
              </View>
            ),
          },

          {
            backgroundColor: "#fff",
            image: (
              <View style={[styles.imageContainer, { left: 20 }]}>
                <Image
                  source={require("../../assets/onboarding/money1.png")}
                  style={styles.imageStyle}
                />
              </View>
            ),
            title: (
              <View style={[styles.titleContainer, { left: 120 }]}>
                <Text style={styles.titleStyle}>Easy Payment</Text>
              </View>
            ),
            subtitle: (
              <View style={[styles.subtitleContainer, { left: 50 }]}>
                <Text style={styles.subtitleStyle} numberOfLines={3}>
                  Payment made easy through debit card, credit card & more ways
                  to pay for your food.
                </Text>
              </View>
            ),
          },
          {
            backgroundColor: "#fff",
            image: (
              <View style={styles.imageContainer}>
                <Image
                  source={require("../../assets/onboarding/restaurant1.png")}
                  style={styles.imageStyle}
                />
              </View>
            ),
            title: (
              <View style={styles.titleContainer}>
                <Text style={styles.titleStyle}>Enjoy the Taste!</Text>
              </View>
            ),
            subtitle: (
              <View style={styles.subtitleContainer}>
                <Text style={styles.subtitleStyle}>
                  Healthy eating means eating a variety of foods that give you
                  the nutrients you need to maintain your health.
                </Text>
              </View>
            ),
          },
        ]}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    position: "center",
  },
  imageStyle: {
    borderRadius: 0,
    height: 150,
    width: 150,
    resizeMode: "cover",
  },
  titleContainer: {
    backgroundColor: "pink",
    width: "40%",
    // Adjusted marginTop value
    marginBottom: "-60%",
    height: "5%",
    borderRadius: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  titleStyle: {
    fontSize: 22,
    fontWeight: "500",
    lineHeight: 33,
    letterSpacing: 0,
    textAlign: "center",
  },
  subtitleContainer: {
    position: "absolute",
    marginTop: "80%",
    width: 277,
    height: 46,

    marginLeft: 42,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",

    borderRadius: 0, // Remove the borderRadius property or replace with the desired value
  },
  subtitleStyle: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 25,
    letterSpacing: 0,
    textAlign: "center",
    color: "#838383",
  },
});
export default OnboardingScreen;
