import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlices'
import tw from 'tailwind-react-native-classnames'
import MapView, {Marker} from 'react-native-maps/lib/MapView'


const MapT1 = () => {
    const origin = useSelector(selectOrigin)


    
    return (

        
      <MapView
          style={tw`flex-1`} 
          initialRegion={{
              latitude:41.34435,
              longitude: 19.77691,
              latitudeDelta: 0.004,
              longitudeDelta: 0.004,
              
          }}
      >

        
      </MapView>
    )
}

export default MapT1