import { StatusBar, SafeAreaView, StyleSheet, Text } from 'react-native';
import React from 'react';
import Details from './src/screens/details/Details';

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <Details />

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
