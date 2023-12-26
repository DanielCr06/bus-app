import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'
import { Dimensions } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const LiveLocation = () => {
  return (
    <View style={styles.container}>
      <MapView 
        style={[tw`flex-1`,styles.map]}
        initialRegion={{
            latitude: 41.3275,
            longitude: 19.8187,
            latitudeDelta: 0.0005,
            longitudeDelta: 0.0005
        }}
      />
    </View>
  )
}

export default LiveLocation

const styles = StyleSheet.create({
    container:{
      backgroundColor: '#040D12'
    },
    map:{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    }
})