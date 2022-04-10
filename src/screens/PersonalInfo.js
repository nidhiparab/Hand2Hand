import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button, BottomNavigation } from 'react-native-paper'

const PersonalInfo = (navigation) => {
    const [name, setName] = useState('')
    const [lname, setLName] = useState('')
    const [year, setYear] = useState('')
    const [dob, setDOB] = useState('')
    const [phone, setPhone] = useState('')

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Personal Info!</Text>
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                Profile Picture
            </Button>
            <TextInput
                label="First Name"
                value={name}
                mode="outlined"
                onChangeText={text => setName(text)}
            />
            <TextInput
                label="Last Name"
                value={lname}
                mode="outlined"
                onChangeText={text => setLName(text)}
            />
            <TextInput
                label="Year of Admission"
                value={year}
                mode="outlined"
                keyboardType="numeric"
                onChangeText={text => setYear(text)}
            />
            <TextInput
                label="Date of Birth"
                value={dob}
                mode="outlined"
                keyboardType="numeric"
                onChangeText={text => setDOB(text)}
            />
            <TextInput
                label="Contact Number:"
                value={phone}
                mode="outlined"
                keyboardType="numeric"
                onChangeText={text => setPhone(text)}
            />
            <Button mode="contained" onPress={() => BottomNavigation.goBack()}>
                Update
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30,
        justifyContent: "space-evenly"
    },
    text: {
        fontSize: 22,
        textAlign: "center"
    }
});


export default PersonalInfo