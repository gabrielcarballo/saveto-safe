import { StatusBar, SafeAreaView, StyleSheet, Text } from 'react-native';
import React from 'react';
import Details from './src/screens/details/Details';
import { useFonts } from 'expo-font';
import { Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
//make custom Text components with fonts
// Replace the default font with the custom font


export default function App() {
  const [loaded] = useFonts({
    'Montserrat-Italic': Montserrat_400Regular_Italic,
    'Montserrat-Regular': Montserrat_400Regular,
    'Montserrat-Bold': Montserrat_700Bold,
  });

  if (!loaded) {
    return null;
  }

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
