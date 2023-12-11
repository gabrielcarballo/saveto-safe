import React from "react";
import { StyleSheet, Dimensions, Text, Image, View, Button } from "react-native";
import DetailsCard from "./DetailsCard";
import MontserratText from "../../components/MontserratText";

const top = require('../../../assets/topo.png');

const { width } = Dimensions.get('screen');

function detailsScreen() {
  return (
    <>
      <Image source={top} style={styles.top} />
      <MontserratText style={styles.title}> Product Details </MontserratText>
      <View style={styles.view}>
        <DetailsCard />
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
    textAlign: 'center',
    marginTop: 16,
    position: 'absolute',
    width: '100%',
    color: '#fff',
    fontWeight: 'bold',
  },
  view: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#fff'
    

  },
 
}
);


export default detailsScreen;
