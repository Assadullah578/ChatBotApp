import React from 'react';
import { DrawerContentScrollView, DrawerItemList, View } from '@react-navigation/drawer';
function CustomDrawer(props) {
    return (

        <DrawerContentScrollView  {...props} className="mt-10" contentContainerStyle={{ backgroundColor: '#A3EDFF', height: '100%' }} >

            <DrawerItemList  {...props} />

        </DrawerContentScrollView>

    );
}

export default CustomDrawer;