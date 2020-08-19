import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  function handleSubmit() {
    const hei = height / 100;
    const imc = weight / (hei * hei);
    
    if(imc < 18.6) {
      alert('You are underweight ' + imc.toFixed(2));
    } else if(imc >= 18.6 && imc < 24.9){
      alert('Ideal weight ' + imc.toFixed(2));
    } else if(imc >= 24.9 && imc < 34.9) {
      alert('Overweight ' + imc.toFixed(2));
    }
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>IMC Calculator</Text>
      <TextInput 
      style={styles.input}
      value={weight}
      onChangeText={ (weight) => setWeight(weight) }
      placeholder="Weight(Kg)"
      keyboardType="numeric"
      />
      <TextInput 
      style={styles.inputHeight}
      value={height}
      onChangeText={ (height) => setHeight(height) }
      placeholder="Height(cm)"
      keyboardType="numeric"
      />
      <TouchableOpacity 
      style={styles.button}
      onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  title:{
    textAlign: 'center',
    marginTop: 50,
  },
  input:{
    backgroundColor: '#64dfdf',
    borderRadius: 15,
    marginTop: 15,
    margin: 100,
    padding: 20,
    fontSize: 15,
    color: '#FFF',
  },
  inputHeight:{
    backgroundColor: '#64dfdf',
    borderRadius: 15,
    marginTop: -50,
    margin: 100,
    padding: 20,
    fontSize: 15,
    color: '#FFF',
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
    margin: 150,
    backgroundColor: '#00b4d8',
    padding: 10,
    borderRadius: 15,
  },
  buttonText:{
    color: '#FFF',
    fontSize: 15,
  }
});