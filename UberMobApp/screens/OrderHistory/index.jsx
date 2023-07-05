import { View, Text , ScrollView} from 'react-native'
import React from 'react'

const OrderHistory = () => {
  return (
    <ScrollView horizontal>
    <View style={{ flexDirection: 'row' }}>
      <View style={{ width: 200, height: 200, backgroundColor: 'red' }}>
        <Text>Item 1</Text>
      </View>
      <View style={{ width: 200, height: 200, backgroundColor: 'green' }}>
        <Text>Item 2</Text>
      </View>
      <View style={{ width: 200, height: 200, backgroundColor: 'blue' }}>
        <Text>Item 3</Text>
      </View>
    </View>
  </ScrollView>
  )
}

export default OrderHistory;