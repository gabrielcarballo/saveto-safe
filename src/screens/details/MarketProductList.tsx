import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, View, FlatList, FlatListProps, Text, Pressable } from 'react-native'
import { marketSearchProps } from '../../mocks/details'
import MontserratText from '../../components/MontserratText'
import MarketPricesCard from './MarketPricesCard'
import AddToShopButton from '../../components/AddToShopButton'
import { Button } from 'react-native-paper'


export default function MarketProductList({ marketSearch }: { marketSearch: marketSearchProps[] }) {
  const [sortBy, setSortBy] = useState<'price' | 'distance'>('price');
  const [selectedMarket, setSelectedMarket] = useState<string | null>(null);

  const handlePress = useCallback((marketName: string) => {
    setSelectedMarket(marketName);
  }, []);

  const renderItem = useCallback(({ item }: { item: marketSearchProps }) =>
    <MarketPricesCard
      isSelected={selectedMarket === item.name}
      onPress={() => selectedMarket === item.name ? setSelectedMarket(null) : handlePress(item.name)}
      {...item}
    />, [selectedMarket, handlePress]);


  const sortedMarketSearch = [...marketSearch].sort((a, b) => sortBy === 'price' ? a.price - b.price : a.distance - b.distance);

  return (
    <>
      <View style={styles.container}>
        <MontserratText style={styles.titleList}>Prices around you</MontserratText>
        <View style={styles.sortView}>
          <Pressable
            onPress={() => setSortBy('price')}
            style={sortBy === 'price' ? styles.selectedSort : styles.sortButton}
          >
            <MontserratText>Sort by Price</MontserratText>
          </Pressable >
          <Pressable
            onPress={() => setSortBy('distance')}
            style={sortBy === 'distance' ? styles.selectedSort : styles.sortButton}
          >
            <MontserratText>Sort by Distance</MontserratText>
          </Pressable >
        </View>
      </View>
      <FlatList
        horizontal={true}
        data={sortedMarketSearch}
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
    textAlign: 'center',
    alignSelf: 'flex-end',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  sortButton: {
    padding: 5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 0,
  },
  selectedSort: {
    backgroundColor: '#7bb6e0',
    padding: 5,
    borderRadius: 20,

    
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  sortView: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
})