import React from 'react'
import { createBottomTabNavigator } from '@react-navigation//bottom-tabs'


import TelaA from '../Views/TelaA'
import TelaB from '../Views/TelaB'
import TelaC from '../Views/TelaC'

const routeTab = createBottomTabNavigator()

const Tab = () => {
    return (
        <routeTab.Navigator initialRouteName="TelaA" tabBaroptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'blue',
            labelStyle: {fontSize: 30}
            }}>
            <routeTab.Screen name="Home" component={TelaA}/>
            <routeTab.Screen name="Login" component={TelaB}/>
            <routeTab.Screen name="Produtos" component={TelaC}/>
        </routeTab.Navigator>
    )
}

export default Tab;