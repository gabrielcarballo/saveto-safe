import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Dimensions, GestureResponderEvent } from "react-native";
import MontserratText from '../../components/MontserratText';
import { marketSearchProps } from "../../mocks/details";

const imageSize = Dimensions.get('window').width / 8;
//amount button or + and - when clicked
// add to shopping list add the numeber of items to the list

export default function MarketPricesCard({ distance, image, location, name: marketName, price, isSelected, onPress }: marketSearchProps & { isSelected: boolean, onPress: (event: GestureResponderEvent) => void }) {
  let count = 0;

  return (
    <TouchableOpacity style={[styles.container, isSelected ? styles.selected : {}]} activeOpacity={0.9} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.marketContainer}>
        <MontserratText style={styles.productName}>{marketName}</MontserratText>
      </View>
      <View style={styles.priceInfo}>
        <MontserratText style={styles.price}>$ {price}</MontserratText>
      </View>
      <View style={styles.locationInfo} >
        <MontserratText style={styles.distance}>{distance} km</MontserratText>
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
    alignItems: 'center',
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: '#FEEBEB',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 10,
    marginRight: 10,
    borderRadius: 20,
    width: 200,
    height: 220,
    borderColor: 'transparent',
    borderWidth: 2,
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
    // backgroundColor: 'white',
    flexDirection: 'row',
    // borderRadius: 10,
    justifyContent: 'center',
    // elevation: 5,
    // shadowColor: '#1F2687',
    // shadowOffset: { width: 0, height: 8 },
    // shadowOpacity: 0.37,
    // shadowRadius: 10,
    marginTop: 20,
  },
  priceInfo: {
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
    color: 'black',
  },
  distance: {
    fontSize: 16,
    fontStyle: "italic",
    color: 'black',
    fontWeight: "bold",
  },
  selected: {
    borderColor: '#1F2687',
  },
})