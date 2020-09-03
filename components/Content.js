import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Card from '../components/parts/Card';
export default class Content extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Card color1='green' time={(this.props.data[1].dt_txt).split(" ")[1]} temp={this.props.data[1].main.temp} icon={this.props.data[1].weather[0].icon}></Card>
                <Card color1='red' time={(this.props.data[2].dt_txt).split(" ")[1]} temp={this.props.data[2].main.temp} icon={this.props.data[2].weather[0].icon}></Card>
                <Card color1='blue' time={(this.props.data[3].dt_txt).split(" ")[1]} temp={this.props.data[3].main.temp} icon={this.props.data[3].weather[0].icon}></Card>
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