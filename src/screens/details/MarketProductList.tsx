import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, View, FlatList, FlatListProps, Text } from 'react-native'
import { marketSearchProps } from '../../mocks/details'
import MontserratText from '../../components/MontserratText'
import MarketPricesCard from './MarketPricesCard'

// add button to order by price
// add button to order by distance
// add sort by price or distance
type chosenMarket = Pick<marketSearchProps, 'name'>


export default function MarketProductList({ marketSearch }: { marketSearch: marketSearchProps[] }) {

  const [selectedMarket, setSelectedMarket] = useState<string | null>(null);

  const handlePress = useCallback((marketName: string) => {
    setSelectedMarket(marketName);
  }, []);

  const renderItem = ({ item }: { item: marketSearchProps }) =>
    <MarketPricesCard
      isSelected={selectedMarket === item.name}
      onPress={() => selectedMarket === item.name ? setSelectedMarket(null) : handlePress(item.name)}
      {...item}
    />
  // marketSearch.sort((a, b) => a.price - b.price)
  return (
    <>
      <MontserratText style={styles.titleList}>Price in other stabilishments</MontserratText>
      <FlatList
        horizontal={true}
        data={marketSearch}
        renderItem={renderItem}
        keyExtractor={({ name }) => name}
      />
    </>
  )
}

const styles = StyleSheet.create({
  titleList: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    alignSelf: 'center',
  }
})