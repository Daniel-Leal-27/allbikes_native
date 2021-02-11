import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'


import TelaA from '../Views/TelaA'
import TelaB from '../Views/TelaB'
import TelaC from '../Views/TelaC'

const routerDrawer = createDrawerNavigator()


const Drawer = () => {
    return (
        <routerDrawer.Navigator initialRouteName="TelaA">
            <routerDrawer.Screen name="TelaA" componente={TelaA}/>
            <routerDrawer.Screen name="TelaB" componente={TelaB}/>
            <routerDrawer.Screen name="TelaC" componente={TelaC}/>
        </routerDrawer.Navigator>
    )
}

export default Drawer