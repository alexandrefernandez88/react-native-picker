// Atividade 3
// Exemplo PICKER
// Alexandre Fernandez - RA10482120706

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function AppPicker() {

  let [pizza, setPizza] = useState('Selecione uma pizza');

  return (
    <View style={styles.container}>
      <Text style={{ 
        fontSize: 28, 
        fontWeight: 'bold', 
        textAlign: 'center' 
        }}>Demonstrando o Picker através da escolha de uma pizza</Text>

      <Picker style={{ width: 250, height: 120, borderColor: 'black' }}
        selectedValue={pizza}
        onValueChange={(item, indexItem) => {
          setPizza(item)
          console.log("Exibe o valor do ITEM: " + item);
          console.log("Exibe o valor do INDEXITEM: " + indexItem);
        }}
      >
        <Picker.Item key={0} label='Clique aqui' value='' />
        <Picker.Item key={1} label='Pizza de Mussarela' value='Mussarela' />
        <Picker.Item key={2} label='Pizza de Portuguesa' value='Portuguesa' />
        <Picker.Item key={3} label='Pizza de 4 queijos' value='4 queijos' />
        <Picker.Item key={4} label='Pizza de Marguerita' value='Marguerita' />
        <Picker.Item key={5} label='Pizza de Frango' value='Frango' />
        <Picker.Item key={6} label='Pizza de Vegetais' value='Vegetais' />
        <Picker.Item key={7} label='Pizza de Especial' value='Especial' />
      </Picker>
      <Text>A pizza escolhida foi: {pizza} </Text>
        <Text>  </Text>
        <Text>  </Text>
      <Button title="Confirmar" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6d94bc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    fontWeight: 'bold',
  },
});
