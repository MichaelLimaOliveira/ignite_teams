import { StyleSheet } from "react-native";

const welcomeStyles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65"
    },
    logo: {
        width: 100,
        height: 100,
        position: "absolute",
        top: 70

    },
    signInButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#4ECDC4"
    }
});

export { welcomeStyles };

