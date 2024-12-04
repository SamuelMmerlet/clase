import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import HomeScreen from './screen/HomeScreen';
import RecommendationsScreen from './screen/Recomendaciones';
import AboutUsScreen from './screen/Aboutus';
import FlightBookingScreen from './screen/Booking';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return <HomeScreen navigate={setCurrentScreen} />;
      case 'Recommendations':
        return <RecommendationsScreen navigate={setCurrentScreen} />;
      case 'AboutUs':
        return <AboutUsScreen navigate={setCurrentScreen} />;
      case 'FlightBooking':
        return <FlightBookingScreen navigate={setCurrentScreen} />;
      default:
        return <HomeScreen navigate={setCurrentScreen} />;
    }
  };

  return <View style={styles.container}>{renderScreen()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});