import React from 'react'
import AuthNavigator from "./Auth/index"
import AppNavigator from "./AppFront/index"



const index = () => {
    let isLoggedIn = true;

    return (
        <>
            {isLoggedIn && <AppNavigator/>}
            {!isLoggedIn && <AuthNavigator/>}
        </>
    )
}

export default index
