import { View, Text , TextInput, StyleSheet} from 'react-native'
import React from 'react'
import { createEntityAdapter } from '@reduxjs/toolkit'

const Custominput2 = ({value, setValue, placeholder, secureTextEntry}) => {
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
        width: '50%',
        height: 50,
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'center',

        paddingHorizontal: 10,
        marginVertical: 10,
        marginRight: 170
    },
    input: {
        textAlign: 'center',
        
    }
})

export default Custominput2