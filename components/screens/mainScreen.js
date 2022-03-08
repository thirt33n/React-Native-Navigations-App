import * as React from 'react'
import { Button, View, Text,TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Mainscreen({navigation}){

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Ionicons name="home-sharp" size={120} color="#1DB953" />
            <TouchableOpacity
            onPress={() => navigation.navigate('Secondscreen')}
            style={styles.button}
            >
            <Text style={{color:'#000',fontSize: 15}}>Go</Text>
            </TouchableOpacity>
        </View>
      )
    }


    const styles = StyleSheet.create({

      button: {
        backgroundColor:'#1DB953',
        padding:'5%',
        marginTop:'20%',
        borderRadius: 70
        
      }



    })