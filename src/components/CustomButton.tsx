import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import MontserratText from './MontserratText';



export default function CustomButton({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.touchable} onPress={onPress}>
      <MontserratText style={styles.touchable.text}>{ text }</MontserratText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: '#0a759d',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    alignSelf: 'center',
    marginVertical: 8,
    textAlign: 'center',
    color: '#fff',
    text: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16
    },
  },
});