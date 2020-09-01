import React, { Component } from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style={styles.heading}>Weather Forecast </Text>
                <Image source={require('../assets/sun.webp')} style={styles.image}></Image>
                <Text style={styles.temprature}>Temprature</Text>
                <Text style={styles.location}>Location</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container : {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        margin: 5,
        backgroundColor: "yellow"
    },
    heading : {
        fontSize: 28,
        textAlign: "center",
        marginVertical: 10
    },
    image:{
        height: 100,
        width: 100,
        alignSelf: "center"
    },
    location : {
        textAlign: "center",
        fontSize: 26
    },
    temprature: {
        fontSize: 48,
        textAlign: "center",
        fontWeight: "bold"
    }

    
});


