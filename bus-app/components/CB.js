import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CB = ({ onPress, text, type = "PRIMARY" , bgColor, fgColor}) => {
  return (
    <TouchableOpacity style={styles.root}>
    <Pressable 
        onPress={onPress} 
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
  )
}

const styles = StyleSheet.create({
    container:{
        
        height: 50,
        width: 150,
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 15,
        justifyContent: 'center',
        
    },

    container_PRIMARY:{
        backgroundColor: '#3B71F3',
    },
    container_TERTIARY:{
        
    },
    text:{
        fontWeight: 'bold',
        color: 'white',

    },
    text_TERTIARY:{
        color: 'gray',

    },
    root:{
        paddingLeft: 15
    }
})

export default CB