import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Footer extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style={styles.heading}>Additional Info</Text>
                {/* <Image source={require('../assets/sun.webp')} style={styles.image}></Image> */}
                <View style={styles.info}>
                <View >
                        <View>
                            <Text style={styles.infoheading}>Wind <Text style={styles.infotext} >23%</Text></Text>
                        </View>   
                        <View>
                            <Text style={styles.infoheading}>Wind <Text style={styles.infotext}>23%</Text></Text>
                        </View>
                </View>
                <View >
                        <View>
                            <Text style={styles.infoheading}>Wind <Text style={styles.infotext}>23%</Text></Text>
                        </View>   
                        <View>
                            <Text style={styles.infoheading}>Wind <Text style={styles.infotext}>23%</Text></Text>
                        </View>
                </View>
                </View>
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
        padding: 10
    },
    heading : {
        fontSize: 28,

    },
    infoheading:{
        fontSize: 16
    },
    infotext:{
        fontSize: 14    
    },
    location : {
        textAlign: "center",
        fontSize: 26
    },
    temprature: {
        fontSize: 48,
        textAlign: "center",
        fontWeight: "bold"
    },
    info:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 40
    }
    
});
