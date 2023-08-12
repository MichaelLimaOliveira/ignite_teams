import { Image, ImageBackground, View } from "react-native";
import { welcomeStyles } from "./styles";
const image = require("../../assets/background.jpg")
const logo = require("../../assets/logo-red.png")

export function Welcome() {
    return (
        <ImageBackground source={image} style={welcomeStyles.background}>
            <Image source={logo} style={welcomeStyles.logo}></Image>

            <View style={welcomeStyles.signInButton}></View>
            <View style={welcomeStyles.loginButton}></View>
        </ImageBackground>
    );
}

