import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const HomePage = () => {
    return (
        <View style={styles.wrapper}>
            <Text>Home</Text>         
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})