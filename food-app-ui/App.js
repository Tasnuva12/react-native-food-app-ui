import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import OnboardingScreen from "./screens/Onboarding/OnboardingScreen";
import { loadFonts } from "./components/fontLoader";


export default function App() {
 useEffect(() => {
   loadFonts();
 }, []);


  return (
    
      <OnboardingScreen />

  );
}
