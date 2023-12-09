import { StatusBar, SafeAreaView, StyleSheet, Text } from 'react-native';
import React from 'react';
import { Basket } from './src/screens/Basket';

export default function App() {
  const banana = {
    name: 'Banana',
    price: 1.5,
    quantity: 1,
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <Basket productInfo={banana}/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
});
