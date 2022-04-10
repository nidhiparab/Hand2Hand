import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Start = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/startBg.png')} style={styles.bg} >
                <View style={styles.box1}>
                    <Image style={{ width: 480, height: 460 }} source={require('../assets/logo.png')} />
                </View>
                <View >
                    <Text style={styles.text}>SE Group 13</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    box1: {
        margin: 70,
        alignItems: "center"
    },
    text: {
        // fontCode: "0x7D0E",
        fontSize: 20,
        textAlign: "center",
        color: "#602F03"
    },
    container: {
        flex: 1,
    },
    bg: {
        flex: 1,
        justifyContent: "center"
    }

});

export default Start