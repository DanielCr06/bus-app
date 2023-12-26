import { View, Text } from 'react-native'
import React from 'react'
import MapView, {Marker} from 'react-native-maps/lib/MapView'
import tw from 'tailwind-react-native-classnames'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlices'
import { StyleSheet } from 'react-native'

const Map = () => {
    const origin = useSelector(selectOrigin)
  return (
    <MapView
        style={[tw`flex-1`, styles.bg]} 
        initialRegion={{
            latitude:41.3275,
            longitude: 19.8187,
            latitudeDelta: 0.062,
            longitudeDelta: 0.002
        }}
    />
  )
}

const styles = StyleSheet.create({

  bg:{
    backgroundColor:'##040D12'
  }
})

export default Map