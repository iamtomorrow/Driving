
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Home } from "../screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-remix-icon";
import { Search } from "../screens/Search";

const Stack = createNativeStackNavigator( );
const Tabs = createBottomTabNavigator( );

const HomeStack = ( ) => {

    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Home" component={ Home } options={{ }} />
            <Stack.Screen name="Search" component={ Search } options={{ }} />
        </Stack.Navigator>
    )
}

export const Navigator = ( ) => {
    return (
        <NavigationContainer>
            <Tabs.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    height: 70,
                },
                tabBarIcon: ( ) => {
                    let iconName: any;

                    if ( route.name === "Home" ) { iconName = "home-line" }
                    else if ( route.name === "Search" ) { iconName = "search-line" }

                    return <Icon name={ iconName } size={30} color="#000000" />
                },
            })}>
                <Tabs.Screen 
                    name="Home"
                    component={ HomeStack }
                    options={{
                        tabBarLabelStyle: {
                            color: "#000000",
                            marginTop: 6,
                            fontSize: 13,
                            fontWeight: "600"
                        }
                    }}
                />

                <Tabs.Screen 
                    name="Search"
                    component={ Search }
                    options={{
                        tabBarLabelStyle: {
                            color: "#000000",
                            marginTop: 6,
                            fontSize: 13,
                            fontWeight: "600"
                        }
                    }}
                />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}