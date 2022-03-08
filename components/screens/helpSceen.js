import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
export default function HelpScreen(){

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Ionicons name="help-circle-outline" size={120} color="#1DB953" />
        <Text style={{color:'#1DB953', margin: '5%',fontSize:20}}>HELP SCREEN</Text>
      </View>
    );

}