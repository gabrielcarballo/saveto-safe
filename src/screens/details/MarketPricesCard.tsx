import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Dimensions } from "react-native";
import MontserratText from '../../components/MontserratText';
import { marketSearchProps } from "../../mocks/details";

const imageSize = Dimensions.get('window').width / 8; // adjust this as needed


export default function MarketPricesCard({ distance, image, location, name, price }: marketSearchProps) {
  let count = 0;
  const handlePress = () => {
    count++;
    console.log(`Pressed on ${name} ${count} times!`);
  }
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={handlePress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
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
    </TouchableOpacity>
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
    backgroundColor: '#C1D5FD',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 10,
    marginRight: 10,
    borderRadius: 20,
  },
  imageContainer: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    overflow: 'hidden',
    alignSelf: 'center',
    position: 'absolute',
    marginTop: -imageSize / 5,
    backgroundColor: 'white',
    zIndex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  marketContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#1F2687',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.37,
    shadowRadius: 10,
    marginTop: 20,
  },
  glassmorphism: {
    backgroundColor: 'white',
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