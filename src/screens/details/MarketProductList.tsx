import React from 'react'
import { StyleSheet, View, FlatList, FlatListProps, Text } from 'react-native'
import { marketSearchProps } from '../../mocks/details'
import MontserratText from '../../components/MontserratText'
import MarketPricesCard from './MarketPricesCard'

export default function MarketProductList({ marketSearch }: { marketSearch: marketSearchProps[] }) {

  const renderItem = ({item}: { item: marketSearchProps }) => <MarketPricesCard {...item}/>

  return (
    <>
      <MontserratText style={styles.titleList}>Price in other stabilishments</MontserratText>
      <FlatList
        style={null}
        horizontal={true}
        data={marketSearch}
        renderItem={renderItem}
        keyExtractor={({name}) => name}
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