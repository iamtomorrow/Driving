"use client";

import { Pressable, TextInput, View } from "react-native";
import Icon from "react-native-remix-icon";
import { useNavigationContext } from "../../../contexts/Context.Navigation";

export const SearchBar = ( ) => {
    const NavigationContext = useNavigationContext( );

    return (
        <View
        style={{
            width: "100%",
            height: 50,
            paddingLeft: 16,
            paddingRight: 16,
        }}>
            <Pressable
            onPress={ ( ) => NavigationContext.updateRoute("Search") }
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
                onFocus={ ( ) => NavigationContext.updateRoute("Search") }
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
    )
}