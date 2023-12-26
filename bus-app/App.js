import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import Station from './screens/Station'
import Terminal from './screens/Terminal'
import SignInScreen from './screens/SignInScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Sign from './screens/Sign';
import MapScreen from './screens/MapScreen';
import PaymentScreen from './screens/PaymentScreen';
import Balance from './screens/Balance'




export default function App() {
  const Stack = createStackNavigator();


  return (
    <Provider store={store}>
        <NavigationContainer>
          <SafeAreaProvider>
            <Stack.Navigator>
              <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name='Station'
                component={Station}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name='Balance'
                component={Balance}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name='MapScreen'
                component={MapScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name='Terminal'
                component={Terminal}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name='SignInScreen'
                component={SignInScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name='Sign'
                component={Sign}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name='PaymentScreen'
                component={PaymentScreen}
                options={{
                  headerShown: false,
                }}
              />
              
            </Stack.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
      
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    


  },
});
