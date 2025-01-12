import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function DonationScreen({ navigation }) {
  const [donationAmount, setDonationAmount] = useState('');
  const donationAmounts = [100, 200, 500, 1000, 2000, 5000];

  const handleDonationSelect = (amount) => {
    setDonationAmount(amount.toString());
  };

  const handleInputChange = (text) => {
    setDonationAmount(text);
  };


  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}><Text style={{ color: 'green'}}>LÖSEV</Text>'e Bağış Yap</Text>

      {/* Input Section */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Miktar giriniz"
          keyboardType="numeric"
          value={donationAmount}
          onChangeText={handleInputChange}
        />
        <TouchableOpacity style={styles.donateButton} onPress={() => navigation.navigate("bağış onayı")}>
          <FontAwesome name="heart" size={20} color="white" />
          <Text style={styles.donateButtonText}>Bağış</Text>
        </TouchableOpacity>
      </View>

      {/* Ready Donations */}
      <Text style={styles.subHeader}>Hazır Bağışlar</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {donationAmounts.map((amount, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => handleDonationSelect(amount)}
          >
            <Text style={styles.cardText}>{amount} TL</Text>
            <FontAwesome name="gift" size={24} color="white" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  clearButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  donateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#28a745',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  donateButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  scrollContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  cardText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
