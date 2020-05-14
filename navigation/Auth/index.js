import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"


import {GetStartedPage} from "~/screens/Auth/"
const { Navigator, Screen } = createStackNavigator()


const index = () => {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true
            }}
        >
            <Screen name="getstarted" component={GetStartedPage} />
        </Navigator>
    )
}

export default index
