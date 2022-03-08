import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
export default function SecondScreen(){

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Ionicons name="ios-code-working" size={120} color="#1DB953" />
      </View>
    );

}