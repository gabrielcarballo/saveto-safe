import React from "react";

import { Text, StyleSheet } from "react-native";

export default function MontserratText({ children, style = {}}) {
  const isBold = style && 'fontWeight' in style && style?.fontWeight === "bold";
  return (
    <Text style={[style, isBold ? styles.bold : styles.regular]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  regular: {
    fontFamily: "Montserrat-Regular"
  },
  bold: {
    fontFamily: "Montserrat-Bold"
  }
})