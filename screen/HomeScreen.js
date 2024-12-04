import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigate }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a nuestra Agencia de Viajes</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigate('Recommendations')}>
        <Text style={styles.buttonText}>Recomendaciones de Viajes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigate('AboutUs')}>
        <Text style={styles.buttonText}>Sobre Nosotros</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigate('FlightBooking')}>
        <Text style={styles.buttonText}>Reservar Vuelo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#004080',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default HomeScreen;
