import React from "react";
import { StyleSheet, View, Button } from "react-native";
import MontserratText from "../../components/MontserratText";


export default function DetailsCard() {

  return (
    <>
      <View style={styles.container}>
        <View style={styles.detailsCard}>
          <MontserratText style={styles.productName}>Brócoli</MontserratText>
          <MontserratText style={styles.productTag}>VERDURA</MontserratText>
          <MontserratText style={styles.description}>
            A Description about the product
          </MontserratText>
        </View>
        <View style={styles.priceCard}>
          <MontserratText style={styles.price}>$ 15</MontserratText>
        </View>
      </View>
      <Button title="Add to Shoplist" />
    </>
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
  productTag: {
    fontSize: 12,
    color: "white",
    backgroundColor: "black",
    padding: 4,
    borderRadius: 4,
  },
  detailsCard: {
    alignItems: "flex-start",
    flex: 1,

  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: 'center',

  },
  priceCard: {
    justifyContent: "flex-start",
    alignItems: 'flex-end',
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  }
});