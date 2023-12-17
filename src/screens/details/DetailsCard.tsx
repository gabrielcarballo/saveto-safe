import React from "react";
import { StyleSheet, View } from "react-native";
import MontserratText from '../../components/MontserratText';
import { detailsMockProps } from "../../mocks/details";
import ProductTag from "./ProductTag";
import AddToShopButton from "../../components/AddToShopButton";
import MarketProductList from "./MarketProductList";

export default function DetailsCard({ detailsCard:
  { productDescription,
    productName,
    productPrice,
    productTags,
    productProducer,
    productWheightorVolume
  }, addToShoppingList, marketSearch
}: Omit<detailsMockProps, 'title'>) {

  return (
    <>
      <View style={styles.container}>
        <View style={styles.detailsCard}>
          <MontserratText style={styles.productName}>{productName}</MontserratText>
          <MontserratText style={styles.description}>{productProducer}</MontserratText>
          <MontserratText style={styles.description}>{productWheightorVolume}</MontserratText>
          <ProductTag productTags={productTags} />
          <MontserratText style={styles.description}>{productDescription}</MontserratText>
        </View>
        <View style={styles.priceCard}>
          <MontserratText style={styles.price}>{productPrice > 0 ? '$ ' + productPrice : 'Free'}</MontserratText>
        </View>
      </View>
      <MarketProductList marketSearch={marketSearch} />
      <AddToShopButton onPress={null} text={addToShoppingList} />
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

  },

});