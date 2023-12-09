import React from "react";
import { Image } from "react-native";
import { StyleSheet, Dimensions, Text } from "react-native";

const top = require('../../assets/topo.png');

const { width } = Dimensions.get('screen');

function Basket() {
  return (
    <>
      <Image source={top} style={styles.top}/>
      <Text style={styles.title}> Basket Details </Text>
    </>
  )
}

const styles = StyleSheet.create({
  top: {
    width: '100%',
    height: 578/768 * width,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
    position: 'absolute',
    width: '100%',
    color: '#fff',
    
  }
});


export { Basket };
