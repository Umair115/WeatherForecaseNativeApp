import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Card from '../components/parts/Card';
export default class Content extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    container:{
        flexDirection : "row",
        justifyContent: "space-between"
    }
});