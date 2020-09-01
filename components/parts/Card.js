import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class Card extends Component {
    render() {
        return (
            <View style = {styles.container}>
            <Text style={styles.heading}> Time  </Text>
            <Image source={require('../../assets/sun.webp')} style={styles.image}></Image>
            <Text style={styles.location}>Temprature</Text>
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
        backgroundColor: "yellow",
        width:120,
        height:200
    },
    heading : {
        fontSize: 18,
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
        fontSize: 16
    }

    
});