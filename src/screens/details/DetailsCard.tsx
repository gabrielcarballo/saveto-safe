import React from "react";
import { StyleSheet, Dimensions, Text, Image, View, Button, Alert } from "react-native";


export default function DetailsCard() {

  return (
    <>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.detailsCard}>
          <Text style={styles.productName}>Brócoli</Text>
          <Text style={styles.productTag}>VERDURA</Text>
          <Text style={styles.description}>
            A Description about the product
          </Text>
        </View>
        <View style={styles.priceCard}>
          <Text style={styles.price}>$ 15</Text>
        </View>
      </View>
      <Button title="Add to Shoplist" />
    </>
  )
}

const styles = StyleSheet.create({
  description: {
    fontSize: 12,
    fontWeight: "200",
    fontStyle: "italic",
  },

  productName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  productTag: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "black",
    padding: 4,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  detailsCard: {
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: 'center',

  },
  priceCard: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: 'flex-end'

  },
});