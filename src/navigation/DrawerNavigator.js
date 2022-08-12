import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import TabNav from './TabNavigator';
import LikedMovies from '../screens/LikedMovies';
import SavedMovies from '../screens/SavedMovies';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props}/>}
        initialRouteName="Home"
        screenOptions={{
            drawerActiveBackgroundColor: "#7F5283",
            drawerActiveTintColor: "#fff",
            drawerInactiveTintColor: "#1F4690"
            }}>
            <Drawer.Screen name='Home' component={TabNav} />
            <Drawer.Screen name='LikedMovies' component={LikedMovies} />
            <Drawer.Screen name='SavedVideos' component={SavedMovies} />
        </Drawer.Navigator>
    )
}
