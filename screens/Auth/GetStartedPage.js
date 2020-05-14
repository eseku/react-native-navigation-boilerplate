import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const GetStartedPage = (props) => {
    return (
        <View style={styles.wrapper}>
            <Text>Get Started</Text>
            <Button title="Login" />
        </View>
    )
}

export default GetStartedPage

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})