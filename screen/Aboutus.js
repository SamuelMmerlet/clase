import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const AboutUsScreen = ({ navigate }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sobre Nosotros</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.paragraph}>
          En nombre de nuestra agencia, nos apasiona ayudarte a descubrir el mundo de una manera única y emocionante. 
          No somos solo una agencia de viajes, somos tus compañeros de aventura, y nos dedicamos a crear experiencias inolvidables.
        </Text>

        <Text style={styles.paragraph}>
          Con más de 20 años de experiencia, hemos tenido el privilegio de guiar a miles de viajeros hacia destinos soñados, 
          asegurándonos de que cada detalle esté cuidadosamente planeado para que tu viaje sea perfecto.
        </Text>

        <Text style={styles.paragraph}>
          Nuestra misión es ofrecerte los mejores paquetes personalizados, adaptados a tus gustos y necesidades. 
          Desde las playas más lindas hasta las montañas más impresionantes, estamos aquí para hacer realidad tus sueños de viaje.
        </Text>

        <Text style={styles.paragraph}>
          Creemos que viajar es mucho más que visitar lugares; es una oportunidad para crear recuerdos que durarán toda la vida. 
          Estamos comprometidos en ayudarte a aprovechar al máximo cada momento de tu aventura.
        </Text>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => navigate('Home')}>
        <Text style={styles.buttonText}>Volver</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    backgroundColor: '#004080',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    padding: 20,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 15,
    textAlign: 'justify',
  },
  backButton: {
    backgroundColor: '#004080',
    padding: 15,
    borderRadius: 5,
    margin: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AboutUsScreen;
