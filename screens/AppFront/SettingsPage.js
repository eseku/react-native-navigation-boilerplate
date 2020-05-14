import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
//imrn

const SettingsPage = () => {
    return (
       <View style={styles.wrapper}>
           <Text>Settings</Text>
       </View>
    )
}

export default SettingsPage

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
//rnstyle