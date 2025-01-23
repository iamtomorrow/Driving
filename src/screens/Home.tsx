"use client";

import { View, Text } from "react-native"
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

            {
                locations &&
                locations.map(( location, index ) => (
                    <Text
                    style={{
                        color: "red"
                    }}>{ location.address }</Text>
                ))
            }

        </View>
    )
}