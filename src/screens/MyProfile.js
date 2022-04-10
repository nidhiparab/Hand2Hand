import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const MyProfile = ({ navigation }) => {

    const myInfo = [
        {
            name: "Dhara",
            lname: "Shah",
            year: "2",
            phone: "8850399443",
            DOB: "06/12/2002",
            image: "Inert image here",
            desc: "I am a student at SAKEC. I wish to sell my books to my juniors so as to help out all of us"
        },
    ]

    const renderItem = (item) => {
        return (
            <Card style={styles.card}>
                <Card.Title title={item.name + item.lname} />
                <Card.Content>
                    <Paragraph>{item.desc}</Paragraph>
                    <Paragraph>{item.year}</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: item.image }} />
                <Card.Actions>
                    <Button mode="contained" onPress={() => navigation.navigate('persInfo')}>Edit Profile</Button>
                </Card.Actions>

            </Card>
        )
    }

    return (
        <View>
            <FlatList
                data={myInfo}
                keyExtractor={(item) => item.phone}
                renderItem={({ item }) => renderItem(item)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        margin: 10,
        elevation: 2
    }
});


export default MyProfile