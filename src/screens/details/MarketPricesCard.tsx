import React from "react";
import { StyleSheet, View, Image } from "react-native";
import MontserratText from '../../components/MontserratText';
import { marketSearchProps } from "../../mocks/details";


export default function MarketPricesCard({ distance, image, location, name, price }: marketSearchProps) {

  return (
    <View style={styles.container}>
      <View style={styles.marketContainer}>
        <MontserratText style={styles.productName}>{name}</MontserratText>
        <Image source={{ uri: image }} style={{ width: 60, height: 'auto' }} />
      </ View>
      <MontserratText style={{ fontWeight: 'bold' }}>{price}</MontserratText>
      <MontserratText style={styles.description}>{distance}</MontserratText>
      <MontserratText style={styles.description}>{location}</MontserratText>
    </View>
  )
}

const styles = StyleSheet.create({
  description: {
    fontSize: 12,
    fontStyle: "italic",
    color: '#777c',
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  marketContainer: {
    backgroundColor: 'rgba(96, 96, 215, 0.35)',
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'space-between',
    elevation: 5,
    shadowColor: '#1F2687',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.37,
    shadowRadius: 10,
  },
  glassmorphism: {
    backgroundColor: 'red',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#1F2687',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.37,
    shadowRadius: 10,
  },
})