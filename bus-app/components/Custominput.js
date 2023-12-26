import { View, Text , TextInput, StyleSheet} from 'react-native'
import React from 'react'
import { createEntityAdapter } from '@reduxjs/toolkit'

const Custominput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput 
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
    />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: '100%',
        height: 50,
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'center',

        paddingHorizontal: 10,
        marginVertical: 10,
    },
    input: {
        textAlign: 'center',
        
    }
})

export default Custominput