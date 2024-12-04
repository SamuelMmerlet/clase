import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const destinations = [
  { name: 'Playa El Tunco', description: 'Una de las playas más populares para surfistas y turistas.', image: '' },
  { name: 'Ruta de las Flores', description: 'Un recorrido lleno de paisajes coloridos y tradiciones.', image: '' },
  { name: 'Volcán de Izalco', description: 'Conocido como el Faro del Pacífico, ideal para los amantes de la aventura.', image: '' },
  { name: 'Lago de Coatepeque', description: 'Un lago impresionante para relajarse y disfrutar de la vista.', image: '' },
];

const RecommendationsScreen = ({ navigate }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Recomendaciones de Viajes</Text>
      {destinations.map((destination, index) => (
        <View key={index} style={styles.card}>
          <Image style={styles.image} source={{ uri: destination.image || 'https://www.adventurouskate.com/wp-content/uploads/2015/04/DSC_0006.jpg.webp' }} />
          <Text style={styles.cardTitle}>{destination.name}</Text>
          <Text style={styles.cardDescription}>{destination.description}</Text>
        </View>
      ))}
      <TouchableOpacity style={styles.backButton} onPress={() => navigate('Home')}>
        <Text style={styles.buttonText}>Volver</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 10 },
  image: { width: '100%', height: 150, borderRadius: 10 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  cardDescription: { fontSize: 14, color: '#555', marginVertical: 5 },
  backButton: { backgroundColor: '#004080', padding: 10, borderRadius: 5, marginTop: 20, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16 },
});

export default RecommendationsScreen;
