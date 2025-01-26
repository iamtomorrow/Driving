import { ScrollView, Text, View } from "react-native"
import { HeaderSearch } from "../components/Header/Header.Search"
import { useEffect, useState } from "react"
import { getAllLocations } from "../../api";
import { LocationType } from "../../types/location";
import { LocationBar } from "../components/LocationBar/LocationBar";

export const Search = ( ) => {
    const [ locations, setLocations ] = useState<LocationType[]>([ ]);

    useEffect(( ) => {
        getLocations( );
    }, [ ]);

    const getLocations = async ( ) => {
        const data = await getAllLocations( );
        setLocations( data as any );
    }

    return (
        <View
        style={{
            width: "100%",
            height: "auto",
            display: "flex",
            flexDirection: "column"
        }}>
            <HeaderSearch />

            <ScrollView
            style={{
                
            }}>
                <View
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    padding: 10,
                    flexDirection: 'column'
                }}>
                {
                    locations 
                    ? locations.map((location) => (
                            <LocationBar 
                                name={ location.name }
                                address={ location.address }
                                city={ location.city }
                                country={ location.country }
                            />
                        )
                    )
                    : <Text>No locations found!</Text>
                }
                </View>
            </ScrollView>
        </View>
    )
}