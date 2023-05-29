import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ChatScreen from '../screens/ChatScreen';
import { Image, View } from 'react-native';
import Clear from '../screens/Clear';
import Rate from '../screens/Rate';
import Share from '../screens/Share';
import Policy from '../screens/Policy';
import ThemeButton from '../components/ThemeButton';
import NewChat from '../screens/NewChat';

const Drawer = createDrawerNavigator();
function DrawerNavigation(props) {
    return (
        <Drawer.Navigator screenOptions={{ headerTitle: "", headerTitleAlign: 'center', headerStyle: { height: 65 }, drawerLabelStyle: { marginLeft: -10, paddingVertical: 2 }, drawerContentContainerStyle: { backgroundColor: 'lightblue', height: "100%" } }} >
            <Drawer.Screen name="NewChat" component={NewChat} options={{ drawerActiveBackgroundColor: 'white', drawerInactiveBackgroundColor: 'lightblue', drawerActiveTintColor: 'black', drawerInactiveTintColor: 'black', drawerItemStyle: { marginTop: 50 }, drawerIcon: () => <Image source={require('../Images/Add.png')} className="h-8 w-8 ml-2" resizeMode='contain' /> }} />
            <Drawer.Screen name="ChatScreen" component={ChatScreen} options={{ drawerActiveBackgroundColor: 'white', drawerInactiveBackgroundColor: 'lightblue', drawerActiveTintColor: 'black', drawerInactiveTintColor: 'black', drawerIcon: () => <Image source={require('../Images/ChatIcon.png')} className="h-6 w-6 ml-3" resizeMode='contain' /> }} />
            <Drawer.Screen name="Clear Conversation" component={Clear} options={{ drawerActiveBackgroundColor: 'white', drawerInactiveBackgroundColor: 'lightblue', drawerActiveTintColor: 'black', drawerInactiveTintColor: 'black', drawerItemStyle: { marginTop: 200 }, drawerIcon: () => <Image source={require('../Images/Delete-conv.png')} className="h-8 w-8 ml-2" resizeMode='contain' /> }} />
            <Drawer.Screen name="Rate Us" component={Rate} options={{ drawerActiveBackgroundColor: 'white', drawerInactiveBackgroundColor: 'lightblue', drawerActiveTintColor: 'black', drawerInactiveTintColor: 'black', drawerIcon: () => <Image source={require('../Images/Rate-us.png')} className="h-8 w-8 ml-2" resizeMode='contain' /> }} />
            <Drawer.Screen name="Share" component={Share} options={{ drawerActiveBackgroundColor: 'white', drawerInactiveBackgroundColor: 'lightblue', drawerActiveTintColor: 'black', drawerInactiveTintColor: 'black', drawerIcon: () => <Image source={require('../Images/Share.png')} className="h-8 w-8 ml-2" resizeMode='contain' /> }} />
            <Drawer.Screen name="Privacy Policy" component={Policy} options={{ drawerActiveBackgroundColor: 'white', drawerInactiveBackgroundColor: 'lightblue', drawerActiveTintColor: 'black', drawerInactiveTintColor: 'black', drawerIcon: () => <Image source={require('../Images/Privacy-Policy.png')} className="h-8 w-8 ml-2" resizeMode='contain' /> }} />
        </Drawer.Navigator>
    );
}


export default DrawerNavigation;