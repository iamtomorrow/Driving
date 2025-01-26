
import { Image, Pressable, StatusBar, Text, View } from "react-native";
import Icon from "react-native-remix-icon"
import { SearchBar } from "../SearchBar/SearchBar";

export const Header = ( ) => {
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
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,                        
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#000000",
                    }}>
                        <Icon 
                            name="menu-line"
                            size={24}
                            color="#ffffff"
                        />
                    </Pressable>
                </View>

                <View
                style={{

                }}>
                    <Image 
                        source={ require("../../../assets/logo.png")}
                        width={1000}
                        height={1000}
                        alt="Logo"
                        style={{
                            width: 120,
                            height: 30
                        }}
                    />
                </View>

                <View>
                <Pressable
                    style={{
                        paddingLeft: 16,
                        paddingRight: 16,
                        width: "auto",
                        height: 60,                       
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "600"
                        }}>Sign in</Text>
                    </Pressable>
                </View>
            </View>

            <SearchBar />
        </View>
    )
}