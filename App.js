import { StatusBar, SafeAreaView, StyleSheet, Text } from 'react-native';
import React from 'react';
import Details from './src/screens/details/Details';
import { useFonts } from 'expo-font';
import { Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_700Bold } from '@expo-google-fonts/montserrat';


export default function App() {
  const [loaded] = useFonts({
    'Montserrat-Italic': Montserrat_400Regular_Italic,
    'Montserrat-Regular': Montserrat_400Regular,
    'Montserrat-Bold': Montserrat_700Bold,
  });

  if (!loaded) {
    return <Text>Não foi</Text>;
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
    fontFamily: 'Montserrat-Regular',
  },
});
