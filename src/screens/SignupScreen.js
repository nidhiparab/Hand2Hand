import { View, Text, Image, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button } from 'react-native-paper'


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, checkPass] = useState('')
    return (
        <KeyboardAvoidingView behavior="position">
            <View style={styles.box1}>
                <Image style={{ width: 500, height: 300 }} source={require('../assets/logo.png')} />
                <Text style={styles.text}>Sign-Up</Text>
            </View>
            <View>
                <View style={styles.box2}>
                    <TextInput
                        label="Email"
                        value={email}
                        mode="outlined"

                        onChangeText={text => setEmail(text)}
                    />
                    <TextInput
                        label="Password"
                        value={password}
                        mode="outlined"
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                    />
                    <TextInput
                        label="Confirm Password"
                        value={confirmPass}
                        mode="outlined"
                        secureTextEntry={true}
                        onChangeText={text => checkPass(text)}
                    />
                    <Button mode="contained" onPress={() => navigation.navigate('home')}>
                        SignUp
                    </Button>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <Text style={{ textAlign: "center" }}>Already have an account?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    box1: {
        alignItems: "center"
    },
    box2: {
        paddingHorizontal: 40,
        // backgroundColor: "#0E720C",
        height: "60%",
        justifyContent: "space-evenly"
    },
    text: {
        fontFamily: "Roboto",
        fontSize: 22,
        fontWeight: "bold"
    }
});

export default LoginScreen
