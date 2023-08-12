
import { Image, StyleSheet, View } from "react-native";

export function ViewImage() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image resizeMode="contain" source={require("@assets/chair.jpg")} style={styles.image}></Image>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1
    },
    headers: {
        width: "100%",
        height: 100,
        backgroundColor: 'black',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20
    },
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: "#fc5c65",
        position: "absolute",
        top: 40,
        left: 30
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: "#4ecdc4",
        position: "absolute",
        top: 40,
        right: 30
    },
    image: {
        height: "100%",
        width: "100%"
    }
});