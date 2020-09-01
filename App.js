import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

export default function App() {
  return (
    <View>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
    </View>
  );
}

