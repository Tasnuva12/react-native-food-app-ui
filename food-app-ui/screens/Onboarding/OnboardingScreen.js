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
            subtitle: "Done with React Native Onboarding Swiper",
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
    marginBottom: 397,
    marginTop: 93,
    marginLeft: 105,
    marginRight: 105,
  },
  imageStyle: {
    borderRadius: 0,
    height: 150,
    width: 150,
    resizeMode: "cover",
  },
  titleContainer: {
    height: 33,
    width: 225,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius:0,
    justifyContent: "center",
    alignItems: "center",
  },
  titleStyle: {
    fontFamily: "Poppins-Medium",
    fontSize: 22,
    fontWeight: "500",
    lineHeight: 33,
    letterSpacing: 0,
    textAlign: "center",
  },
});
export default OnboardingScreen;
