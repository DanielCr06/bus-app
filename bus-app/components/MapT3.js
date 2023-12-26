import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlices'
import tw from 'tailwind-react-native-classnames'
import MapView, {Marker} from 'react-native-maps/lib/MapView'


const MapT3 = () => {
    const origin = useSelector(selectOrigin)
    return (
      <MapView
          style={tw`flex-1`} 
          initialRegion={{
              latitude:41.33101,
              longitude: 19.81048,
              latitudeDelta: 0.004,
              longitudeDelta: 0.004
          }}
      />
    )
}

export default MapT3