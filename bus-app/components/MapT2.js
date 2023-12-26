import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlices'
import tw from 'tailwind-react-native-classnames'
import MapView, {Marker} from 'react-native-maps/lib/MapView'


const MapT2 = () => {
    const origin = useSelector(selectOrigin)
    return (
      <MapView
          style={tw`flex-1`} 
          initialRegion={{
              latitude:41.31893,
              longitude: 19.83230,
              latitudeDelta: 0.004,
              longitudeDelta: 0.004
          }}
      />
    )
}

export default MapT2