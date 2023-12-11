import React from "react";
import { StyleSheet, View, Button } from "react-native";
import MontserratText from "../../components/MontserratText";
import { detailsMockProps } from "../../mocks/details";

export default function DetailsCard({ detailsCard }: Omit<detailsMockProps, 'title'>) {

  return (
    <>
      <View style={styles.container}>
        <View style={styles.detailsCard}>
          <MontserratText style={styles.productName}>{detailsCard.productName}</MontserratText>
          {typeof detailsCard.productTags === 'object' ? detailsCard.productTags.map((tag, i) => {
            return <MontserratText key={i} style={styles.productTag}>{tag}</MontserratText>
          }) : null}
          <MontserratText style={styles.description}>
            {detailsCard.productDescription}
          </MontserratText>
        </View>
        <View style={styles.priceCard}>
          {detailsCard.productPrice > 0 ? <MontserratText style={styles.price}>
            $ {detailsCard.productPrice}
          </MontserratText> :
            <MontserratText style={styles.price}>Free</MontserratText>}
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
    fontSize: 10,
    color: "white",
    backgroundColor: "black",
    padding: 4,
    borderRadius: 4,
    marginBottom: 2,
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