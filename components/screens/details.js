import * as React from 'react'
import { Button, View, Text,TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
export default function DetailsPage(){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <MaterialIcons name="details" size={120} color="#1DB953" />
        </View>
    );


}