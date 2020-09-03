import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class Card extends Component {
    render() {
        return (
            <View style = {{...styles.container,backgroundColor:this.props.color1}} >
            <Text style={styles.heading}> {this.props.time}  </Text>
            <Image source={{uri: `https://openweathermap.org/img/wn/${this.props.icon}@2x.png`}} style={styles.image}></Image>
            <Text style={styles.location}>{Math.ceil(this.props.temp)}</Text>
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
        width:120,
        height:200,
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