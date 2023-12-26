import {StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useNavigation } from '@react-navigation/native';

const data = [

{
    id:'456',
    title:'Find the nearest station',
    image:'https://seeklogo.com/images/G/go-green-logo-222DF32FC2-seeklogo.com.png',
    screen: 'Station'

},
{
    id:'789',
    title:'Nearest Bus terminals in Tirana',
    image:'https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Adelaide_bus_logo.svg/2048px-Adelaide_bus_logo.svg.png',
    screen: 'Terminal'
},{
    id:'101',
    title:'Check your balance',
    image:'https://png.pngtree.com/png-vector/20220703/ourmid/pngtree-vintage-bus-ticket-paper-coupon-png-image_5559865.png',
    screen: 'Balance'

},
];

const NavOptions = () => {
    const navigation = useNavigation()


  return (
    <FlatList
        style={styles.bg} 
        data={data}
        horizontal
        renderItem={({item}) => (
            <TouchableOpacity
                onPress={() => navigation.navigate(item.screen)}
                style={[tw`p-2 pl-6 pb-0 pt-2 m-2 w-60 mt-0 `, styles.blocks]}
            >
                <View>
                    <Image 
                        style={{width:70, height: 70, resizeMode:'contain'}}
                        source={{uri:item.image}}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon 
                        style={[tw`p-2 rounded-full w-10 mt-4`, styles.icon]}
                        name='arrowright' color='white' type='antdesign'
                    />
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions


const styles = StyleSheet.create({

    bg:{
        height: '100%'
    },

    blocks:{
        borderRadius: 5,
        backgroundColor: '#E5E7EB',
        borderColor: '#D1D1D1',
        borderWidth: 0,
        marginBottom: 10,
        height: 200
    },
    icon:{
        backgroundColor: 'green',
        
        
    }
   
})