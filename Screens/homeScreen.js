import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const HomeScreen = ({route}) => {
    const {name, email} = route.params;

    return (
        <View style={styles.container}>
            <Text>{name}</Text>
            <Text>{email}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        paddingTop: 89,
        paddingHorizontal: 30
    },
})

export default HomeScreen;