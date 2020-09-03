import { StatusBar } from 'expo-status-bar';
import React, { useEffect, Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
// import * as Location from 'expo-location';

export default class MainComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      report :{ 
        city_details : null,
        weather_details : null
      }
    
    }
    this._getData = this._getData.bind(this)
  }

  async _getData(){
    const response = await fetch('https://samples.openweathermap.org/data/2.5/forecast?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02')
    // const response = await fetch(`api.openweathermap.org/data/2.5/forecast?lat=${this.props.lat}&lon=${this.props.lon}&appid=83115083c8eff72de9c58d86e898c15f`)
    const data = await response.json();
    this.setState(
      {
        report :{ 
          city_details : data.city,
          weather_details : [data.list[0],data.list[1],data.list[2],data.list[3]]
        }
      }
    )
  }


  async componentDidMount(){
    console.log("test console")
    await this._getData();
    console.log(this.state.report.weather_details[0])
  }
    
  render(){
    if (this.state.report.weather_details === null || this.state.report.city_details === null) {
    return(<ActivityIndicator size='large' color='blue' style={{
      flex:1,justifyContent:'center'
    }} />)
    } 

      return (
        <View>
            <Header data={[this.state.report.weather_details[0],this.state.report.city_details]}></Header>
            <Content data={this.state.report.weather_details}></Content>
            <Footer data={this.state.report.weather_details[0]}></Footer>
        </View>
      );
    
  
}
}
