import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import DrawerNav from './DrawerNavigator'
import MovieDetails from '../screens/MovieDetails'

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        options={{ headerShown: false }}
        name='Drawer' component={DrawerNav} />
        <Stack.Screen
        name='MovieDetails' component={MovieDetails} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator