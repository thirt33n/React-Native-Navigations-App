import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Mainscreen from "../components/screens/mainScreen";
import SecondScreen from "../components/screens/secondScreen";
import SettingPage from "../components/screens/settingScreen";
import DetailsPage from "../components/screens/details";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HelpScreen from "../components/screens/helpSceen";
import { Ionicons } from '@expo/vector-icons';



const MainStack   =  createNativeStackNavigator();

export  function ReactStackNavigation(){
    return(
    <MainStack.Navigator>
        <MainStack.Screen name="Mainscreen"
         component={Mainscreen}
         options={()=>({
            headerStyle:
                {
                    backgroundColor:'#1DB953',
                    shadowColor: 'transparent', 
                    elevation: 0,
                },
                headerShadowVisible:false,   
                    })
                } 
                
            />
        <MainStack.Screen name="Secondscreen" component={SecondScreen}
            options={()=>({
            headerStyle: 
                {
                    backgroundColor:'#1DB953',
                    shadowColor: 'transparent', 
                    elevation: 0,
                },
                headerShadowVisible:false,
                })
                } 
            />
    </MainStack.Navigator>
    );
}


const SettingScreenStack = createNativeStackNavigator();

function Settings() {
  return (
    <SettingScreenStack.Navigator>
      <SettingScreenStack.Screen name="Settings" component={SettingPage} options={()=>({
            headerStyle:
                {
                    backgroundColor:'#1DB953',
                    shadowColor: 'transparent', 
                    elevation: 0,
                },
                headerShadowVisible:false,   
                    })
                } />
      <SettingScreenStack.Screen name="Details" component={DetailsPage} options={()=>({
            headerStyle:
                {
                    backgroundColor:'#1DB953',
                    shadowColor: 'transparent', 
                    elevation: 0,
                },
                headerShadowVisible:false,   
                    })
                } />
    </SettingScreenStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

export function TabNavigations()
{
    return(

        <Tab.Navigator>
            <Tab.Screen name = "Main" component={ReactStackNavigation} options={{ tabBarBadge: 1,headerShown: false,
                tabBarIcon: () => <Ionicons name="home" size={24} color="#1DB953" />}}  />
            <Tab.Screen name = "Setting" component={Settings}  options={{ tabBarBadge: 2,headerShown: false, 
                tabBarIcon: () => <Ionicons name="settings" size={24} color="#1DB953" /> }}/>
        </Tab.Navigator>


    );



}

const Drawer = createDrawerNavigator();
export default function Navigations()
{
    return(
        <Drawer.Navigator screenOptions={{drawerActiveTintColor: '#1DB953'}}>
            <Drawer.Screen name="Home" component={TabNavigations} options={{headerShown: false}} />
            <Drawer.Screen name="Help" component={HelpScreen} options={{headerShown: false}} />
        </Drawer.Navigator>
        
    );



}





const styles = StyleSheet.create({

    container: {
        elevation: 0,
        shadowColor: 'transparent'
    }


});