import React from "react";
import { StyleSheet, View } from "react-native";
import MontserratText from "../../components/MontserratText";

export default function ProductTag({ productTags }: { productTags: string[] | string }) {

  return (
    <View style={styles.container}>
      {Array.isArray(productTags) ? productTags.map((tag, i) => {
        return <MontserratText key={i} style={styles.productTag}>{tag}</MontserratText>
      }) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  productTag: {
    fontSize: 10,
    color: "white",
    backgroundColor: "black",
    padding: 4,
    borderRadius: 4,
    marginRight: 4,
    marginBottom: 4,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
}
);
