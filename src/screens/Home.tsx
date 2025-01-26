"use client";

import { View, Text, Image, ScrollView, Pressable } from "react-native"
import { Header } from "../components/Header/Header"
import { useEffect, useState } from "react";
import { getAllLocations } from "../../api";

export const Home = ( ) => {
    const [ locations, setLocations ] = useState<any[]>([]);

    useEffect(( ) => {
        _getAllLocations( );
    }, [ ]);

    const _getAllLocations = async ( ) => {
        let data = await getAllLocations( );
        setLocations( data );
        
        console.log("Locations: ", data);
    }

    return (
        <View
        style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#ffffff"
        }}>
            <Header />

            {/*
                locations &&
                locations.map(( location, index ) => (
                    <Text
                    style={{
                        color: "red"
                    }}>{ location.address }</Text>
                ))
            */}

            <View
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                paddingTop: 60,
            }}>
                <Text
                style={{
                    fontWeight: 600,
                    fontSize: 28,
                    paddingLeft: 20,
                    paddingRight: 20,
                    textAlign: "center"
                }}>
                    Booking a car just get easier!
                </Text>

                <Image 
                    source={ require("../../assets/images/home-suv-car.png")}
                    width={100}
                    height={100}
                    style={{
                        height: "50%",
                        width: "80%"
                    }}
                />

                <Pressable
                style={{
                    width: "80%",
                    height: 60,
                    borderRadius: 30,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#000000"
                }}>
                    <Text
                    style={{
                        color: "#ffffff",
                        fontSize: 18,
                        fontWeight: 500,
                    }}>Schedule now</Text>
                </Pressable>
            </View>

        </View>
    )
}