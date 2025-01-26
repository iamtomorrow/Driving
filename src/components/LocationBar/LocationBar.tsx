
import { Text, TouchableOpacity, View } from "react-native"
import { LocationType } from "../../../types/location"
import Icon from "react-native-remix-icon"

export const LocationBar = ({ name, address, city, country }: LocationType) => {

    return (
        <TouchableOpacity
        style={{
            width: "100%",
            height: 80,
            padding: 0,
            marginTop: 10,
            marginBottom: 10,
            display:"flex",
            flexDirection: "row",
        }}>
            <View
            style={{
                borderRadius: 10,
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                flex: 1,
                height: "100%",
                display: "flex",
                flexDirection: "row",
            }}>
                <View
                style={{
                    width: 40,
                    height: 80,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Icon 
                        name="map-pin-2-line"
                        size={24}
                        color="#000000"
                    />
                </View>
                <View
                style={{
                    padding: 6,
                    flex: 1,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start"
                }}>
                    <Text
                    style={{
                        fontSize: 16,
                        fontWeight: 600,
                    }}>{ name }</Text>

                    <Text
                    style={{
                        fontSize: 12,
                        fontWeight: 400,
                    }}>{ address }</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}