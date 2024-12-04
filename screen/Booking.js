import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const BookingScreen = ({ navigate }) => {
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [departureLocation, setDepartureLocation] = useState('');
  const [arrivalLocation, setArrivalLocation] = useState('');
  const [showDeparturePicker, setShowDeparturePicker] = useState(false);
  const [showReturnPicker, setShowReturnPicker] = useState(false);

  const handleConfirm = () => {
    Alert.alert(
      'Datos de Vuelo',
      `Salida: ${departureLocation}\nDestino: ${arrivalLocation}\nFecha de salida: ${departureDate.toLocaleDateString()}\nFecha de regreso: ${returnDate.toLocaleDateString()}`
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigate('Home')}>
        <Text style={styles.buttonText}>Volver</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Agendar Vuelo</Text>

      <TextInput
        style={styles.input}
        placeholder="Lugar de salida"
        value={departureLocation}
        onChangeText={setDepartureLocation}
      />

      <TextInput
        style={styles.input}
        placeholder="Lugar de destino"
        value={arrivalLocation}
        onChangeText={setArrivalLocation}
      />

      <TouchableOpacity
        style={styles.dateButton}
        onPress={() => setShowDeparturePicker(true)}
      >
        <Text style={styles.dateButtonText}>
          {`Seleccionar fecha de salida: ${departureDate.toLocaleDateString()}`}
        </Text>
      </TouchableOpacity>

      {showDeparturePicker && (
        <DateTimePicker
          value={departureDate}
          mode="date"
          display="default"
          onChange={(event, date) => {
            setShowDeparturePicker(false);
            if (date) setDepartureDate(date);
          }}
        />
      )}

      <TouchableOpacity
        style={styles.dateButton}
        onPress={() => setShowReturnPicker(true)}
      >
        <Text style={styles.dateButtonText}>
          {`Seleccionar fecha de regreso: ${returnDate.toLocaleDateString()}`}
        </Text>
      </TouchableOpacity>

      {showReturnPicker && (
        <DateTimePicker
          value={returnDate}
          mode="date"
          display="default"
          onChange={(event, date) => {
            setShowReturnPicker(false);
            if (date) setReturnDate(date);
          }}
        />
      )}

      <TouchableOpacity style={styles.submitButton} onPress={handleConfirm}>
        <Text style={styles.submitButtonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#ADD8E6',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  dateButton: {
    backgroundColor: '#ADD8E6',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  dateButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#004080',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default BookingScreen;
