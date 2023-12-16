import React from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";
import MontserratText from '../../components/MontserratText';
import { marketSearchProps } from "../../mocks/details";


export default function MarketPricesCard({ distance, image, location, name, price }: marketSearchProps) {

  return (
    <ImageBackground source={{ uri: image }} style={styles.container}>
      <View style={styles.marketContainer}>
        <MontserratText style={styles.productName}>{name}</MontserratText>
      </View>
      <View style={styles.glassmorphism}>
        <MontserratText style={styles.price}>{price}</MontserratText>
      </View>
      <View style={styles.locationInfo} >
        <MontserratText style={styles.description}>{distance}</MontserratText>
        <MontserratText style={styles.description}>{location}</MontserratText>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  description: {
    fontSize: 12,
    fontStyle: "italic",
    color: 'black',
    fontWeight: "bold",
  },
  locationInfo: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'space-between',
    padding: 10,
    
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
    alignItems: 'center',
  },
  price: {
    fontSize: 30,
    fontWeight: "bold",
    color: '#1F2687',
  },
})