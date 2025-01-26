

import { Image, Pressable, StatusBar, Text, TextInput, View } from "react-native";
import Icon from "react-native-remix-icon"
import { SearchBar } from "../SearchBar/SearchBar";
import { useNavigation } from "@react-navigation/native";
import { useNavigationContext } from "../../../contexts/Context.Navigation";
import { useState } from "react";

export const HeaderSearch = ( ) => {
    const navigation = useNavigation( );
    const { updateRoute } = useNavigationContext( );
    const [ location, setLocation ] = useState<string>("");
    
    const updateContextAndNavigate = ( route: string ) => {
        updateRoute(route);
        navigation.navigate({ name: route } as never);
    }

    return (
        <View
        style={{
            width: "100%",
        }}>
            <View
            style={{
                // backgroundColor: "yellow",
                marginTop: StatusBar.currentHeight,
                height: StatusBar.currentHeight ? 90 : 300,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
            }}>
                <View
                style={{
                    width: "auto",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 10,
                }}>
                    <Pressable
                    onPress={ ( ) => updateContextAndNavigate("Home") }
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,                        
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <Icon 
                            name="arrow-left-line"
                            size={24}
                            color="#000000"
                        />
                    </Pressable>
                </View>

                <View
                style={{
                    flex: 1,
                    height: 50,
                    paddingRight: 16,
                }}>
                    <Pressable
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.045)",
                        width: "100%",
                        height: "100%",
                        borderRadius: 10,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingLeft: 10,
                    }}>
                        <Icon 
                            name="search-line"
                            size={20}
                            color="rgba(0, 0, 0, 0.5)"
                        />

                        <TextInput
                        placeholder="Car, location, address..."
                        placeholderTextColor={"rgba(0, 0, 0, 0.3)"}
                        value={ location }
                        onChangeText={ (text) => setLocation(text) }
                        style={{
                            flex: 1,
                            fontSize: 16,
                            paddingLeft: 16,
                            paddingRight: 8,
                            color: "#000000",
                            fontWeight: 600
                        }}>

                        </TextInput>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}