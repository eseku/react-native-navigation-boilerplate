import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import BottomTabNavigator from "../BottomTabNavigator"


const {Navigator, Screen} = createStackNavigator()


const index = () => {
    return (
        <Navigator
        screenOptions={{
            headerShown: false,
            gestureEnabled: true
        }}
        >
            <Screen name="Root" component={BottomTabNavigator} />
        </Navigator>
    )
}

export default index
