import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import tw from 'tailwind-react-native-classnames'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'


const TouchableButton = ({ text, type = "PRIMARY" , bgColor, fgColor}) => {

    const navigation = useNavigation()
    return (
        <View style={tw`pl-5 pr-5 pt-4 `}>
        <TouchableOpacity onPress={() => navigation.navigate('PaymentScreen')} >
            <Pressable 
                
                style={[
                    styles.container, 
                    styles[`container_${type}`],
                    bgColor ? {backgroundColor: bgColor} : {}
                ]}>
                <Text 
                style={[
                    styles.text, 
                    styles[`text_${type}`],
                    fgColor ? {color: fgColor} : {}
                ]}
                >
                    {text}
                </Text>
            </Pressable>
            </TouchableOpacity>
        </View>
    )
  }
  
  const styles = StyleSheet.create({
      container:{
          
          height: 60,
          width: 300,
          padding: 15,
          alignItems: 'center',
          borderRadius: 15,
          textAlign: 'center',
          justifyContent: 'center'
      },
  
      container_PRIMARY:{
          backgroundColor: 'green',
      },
      container_SECONDARY:{
          
      },
      text:{
          fontWeight: '200',
          color: 'white',
          fontSize: 23,
          
  
      },
      text_TERTIARY:{
          color: 'gray',
  
      }
  })
  
  export default TouchableButton