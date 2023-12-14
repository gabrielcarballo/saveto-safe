import React from 'react'
import { StyleSheet, View, FlatList, FlatListProps, Text } from 'react-native'
import { marketSearchProps } from '../../mocks/details'
import MontserratText from '../../components/MontserratText'

export default function MarketProductList({ marketSearch }: { marketSearch: marketSearchProps[] }) {

  const renderItem = ({item}: { item: marketSearchProps }) => {
    
    return (
      
      <View style={{ backgroundColor: 'red'}}>

        <MontserratText >{item.name}</MontserratText>
        <MontserratText >{item.price}</MontserratText>
      </View>
    )
  }



  return (
    <View style={styles.container}>
      <FlatList
        style={null}
        horizontal={true}
        data={marketSearch}
        renderItem={renderItem}
        keyExtractor={({name}) => name}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#fff'
  },
  priceCard: {
    justifyContent: "flex-start",
    alignItems: 'flex-end',
  },
})