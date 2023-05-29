import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ChatScreen from '../screens/ChatScreen';
import Chat2 from '../screens/Chat2';
import CustomDrawer from '../components/CustomDrawer';
import { Image } from 'react-native';

const Drawer = createDrawerNavigator();
function DrawerNavigation(props) {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{ headerTitle: "", headerTitleAlign: 'center', headerStyle: { height: 75 }, drawerLabelStyle: { marginLeft: -10, paddingVertical: 2 }, drawerContentContainerStyle: { marginTop: 50 } }} >
            <Drawer.Screen name="Chat2" component={Chat2} options={{ drawerActiveBackgroundColor: 'white', drawerInactiveBackgroundColor: 'lightblue', drawerActiveTintColor: 'black', drawerInactiveTintColor: 'black', drawerIcon: () => <Image source={require('../Images/ChatIcon.png')} className="h-6 w-6 ml-3" resizeMode='contain' /> }} />
            <Drawer.Screen name="ChatScreen" component={ChatScreen} options={{ drawerActiveBackgroundColor: 'white', drawerActiveTintColor: 'black', drawerInactiveTintColor: 'black', drawerIcon: () => <Image source={require('../Images/ChatIcon.png')} className="h-6 w-6 ml-3" resizeMode='contain' /> }} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigation;