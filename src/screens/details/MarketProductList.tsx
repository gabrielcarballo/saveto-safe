import React from 'react'
import { StyleSheet, View, FlatList, FlatListProps, Text } from 'react-native'
import { marketSearchProps } from '../../mocks/details'


export default function MarketProductList({ marketSearch }) {
  console.log('marketSearch', marketSearch)
  const renderItem = ({item} ) => {
    console.log('itemDoLog', item)
    return (
      <View style={{ backgroundColor: 'red'}}>
        <Text >{item.name}</Text>
        <Text >{item.price}</Text>
      </View>
    )
  }



  return (
    <View style={styles.container}>
      <FlatList
        style={null}
        horizontal={false}
        data={[marketSearch]}
        renderItem={renderItem}
        keyExtractor={({marketSearch}) => marketSearch + 1}
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