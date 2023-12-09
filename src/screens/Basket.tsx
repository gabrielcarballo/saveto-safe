import React from "react";
import { StyleSheet, Dimensions, Text, Image, View, Button } from "react-native";

const top = require('../../assets/topo.png');

const { width } = Dimensions.get('screen');

function Basket() {
  return (
    <>
      <Image source={top} style={styles.top} />
      <Text style={styles.title}> Basket Details </Text>

      <View style={styles.view}>
        <Text>Groceries</Text>
        <Text>Product Name</Text>
        <Text style={styles.description}>
          A Description about the product
        </Text>
        <Text>Price</Text>
        <Button title="Add to Basket" />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  top: {
    width: '100%',
    height: 578 / 768 * width,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
    position: 'absolute',
    width: '100%',
    color: '#fff',

  },
  view: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,

  },
  description: {
    fontSize: 12,
    fontWeight: "200",
    fontStyle: "italic"
  }
}
);


export { Basket };
