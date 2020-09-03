import React, { Component } from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style={styles.heading}>Weather Forecast </Text>
                <Image source={{uri: `https://openweathermap.org/img/wn/${this.props.data[0].weather[0].icon}@2x.png`}} style={styles.image}></Image>
                <Text style={styles.temprature}>{Math.ceil(this.props.data[0].main.temp)}</Text>
                <Text style={styles.location}>{this.props.data[1].name}</Text>
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
        fontSize: 26,
        
    },
    temprature: {
        fontSize: 48,
        textAlign: "center",
        fontWeight: "bold",
        color: 'black'
    }

    
});


