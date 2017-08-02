import React, { Component } from "react"
import { View, ScrollView, StyleSheet, Platform } from "react-native"
// import Icon from 'react-native-vector-icons/MaterialIcons';

import { Text, Button, Icon, SocialIcon, Card ,
    FormInput,
    FormLabel,
    CheckBox,
    PricingCard,
    SearchBar,} from "react-native-elements"
var colors = {
    primary: "#397af8",
    primary1: "#4d86f7",
    primary2: "#6296f9",
    secondary: "#8F0CE8",
    secondary2: "#00B233",
    secondary3: "#00FF48",
    grey1: "#43484d",
    grey2: "#5e6977",
    grey3: "#86939e",
    grey4: "#bdc6cf",
    grey5: "#e1e8ee",
    dkGreyBg: "#232323",
    greyOutline: "#cbd2d9"
}
var socialColors = {
    facebook: "#3b5998",
    twitter: "#00aced",
    ["google-plus-official"]: "#dd4b39",
    pinterest: "#cb2027",
    linkedin: "#007bb6",
    youtube: "#bb0000",
    vimeo: "#aad450",
    tumblr: "#32506d",
    instagram: "#517fa4",
    quora: "#a82400",
    foursquare: "#0072b1",
    wordpress: "#21759b",
    stumbleupon: "#EB4823"    
}
var fonts = {

    ios: {
        regular: "System",
        light: "System",
        lightItalic: "System",
        bold: "System",
        boldItalic: "System",
        black: "System",
        blackItalic: "System",
    },
    android: {
        regular: "Roboto",
        italic: "Roboto-Italic",
        thin: "Roboto-Thin",
        thinItalic: "Roboto-ThinItalic",
        light: "Roboto-Light",
        lightItalic: "Roboto-LightItalic",
        medium: "Roboto-Medium",
        mediumItalic: "Roboto-MediumItalic",
        bold: "Roboto-Bold",
        boldItalic: "Roboto-BoldItalic",
        condensed: "RobotoCondensed-Regular",
        condensedItalic: "RobotoCondensed-Italic",
    },
}
const log = () => {
    console.log("Attach a method here.")
}

export default class UI extends Component {
    renderFormsSearchBars() {
        if (Platform.OS === "ios") {
            return (
                <View>
                    <FormLabel containerStyle={styles.labelContainerStyle}>
            Name
                    </FormLabel>
                    <FormInput
                        containerRef="containerRefYOYO"
                        textInputRef="textInputRef"
                        placeholder="Please enter your name..."
                    />
                    <FormLabel
                        textInputRef="textInputRef"
                        containerStyle={styles.labelContainerStyle}
                    >
            Address
                    </FormLabel>
                    <FormInput
                        textInputRef="textInputRef"
                        placeholder="Please enter your address..."
                    />
                    <FormLabel
                        textInputRef="textInputRef"
                        containerStyle={styles.labelContainerStyle}
                    >
            Phone
                    </FormLabel>
                    <FormInput
                        textInputRef="textInputRef"
                        placeholder="Please enter your phone number..."
                    />
                    <Button
                        onPress={() => console.log("yo")}
                        icon={{ name: "done" }}
                        buttonStyle={{ marginTop: 15 }}
                        title="SUBMIT"
                    />
                    <View style={{ marginTop: 10, marginBottom: 0 }}>
                        <SearchBar
                            lightTheme
                            clearIcon
                            textInputRef="textInputRef"
                            placeholder="Type Here..."
                        />
                    </View>
                    <View style={{ marginTop: 10, marginBottom: 0 }}>
                        <SearchBar
                            noIcon
                            lightTheme
                            textInputRef="textInputRef"
                            placeholder="Type Here..."
                        />
                    </View>
                    <View style={{ marginTop: 10, marginBottom: 0 }}>
                        <SearchBar
                            round
                            lightTheme
                            clearIcon
                            textInputRef="searchBar3"
                            placeholder="Type Here..."
                        />
                    </View>
                    <View style={{ marginTop: 10, marginBottom: 0 }}>
                        <SearchBar textInputRef="textInputRef" placeholder="Type Here..." />
                    </View>
                    <View style={{ marginTop: 10, marginBottom: 0 }}>
                        <SearchBar
                            noIcon
                            clearIcon
                            textInputRef="textInputRef"
                            placeholder="Type Here..."
                        />
                    </View>
                    <View style={{ marginTop: 10, marginBottom: 0 }}>
                        <SearchBar
                            round
                            textInputRef="textInputRef"
                            placeholder="Type Here..."
                        />
                    </View>
                </View>
            )
        }
    }    
    render() {
        const { navigation } = this.props

        return (
            <ScrollView>
                <View style={styles.hero}>
                    <Icon color="white" name="whatshot" size={62} type="material" />
                    <Text style={styles.heading}>Buttons & Icons</Text>
                </View>
                <Button
                    buttonStyle={styles.button}
                    backgroundColor={socialColors.facebook}
                    icon={{ name: "account", type: "material-community" }}
                    onPress={() =>
                        navigation.navigate("Button_Detail", { name: "Jordan" })}
                    title="Got to Buttons Detail View"
                />
                <Button
                    backgroundColor={socialColors.stumbleupon}
                    onPress={() => log()}
                    title="BUTTON"
                    buttonStyle={styles.button}
                />
                <Button
                    buttonStyle={styles.button}
                    iconRight
                    backgroundColor={socialColors.quora}
                    icon={{ name: "invert-colors" }}
                    onPress={() => log()}
                    title="BUTTON WITH RIGHT ICON"
                />
                <Button
                    buttonStyle={styles.button}
                    iconRight
                    backgroundColor={socialColors.tumblr}
                    icon={{ name: "motorcycle" }}
                    onPress={() => log()}
                    title="BUTTON WITH RIGHT ICON"
                />
                <Button
                    buttonStyle={styles.button}
                    raised
                    backgroundColor={socialColors.foursquare}
                    icon={{ name: "card-travel" }}
                    onPress={() => log()}
                    title="BUTTON RAISED"
                />
                <Button
                    buttonStyle={styles.button}
                    raised
                    backgroundColor={socialColors.vimeo}
                    icon={{ name: "touch-app" }}
                    onPress={() => log()}
                    title="BUTTON RAISED"
                />
                <Button
                    buttonStyle={styles.button}
                    raised
                    backgroundColor={socialColors.twitter}
                    icon={{ name: "new-releases" }}
                    onPress={() => log()}
                    title="BUTTON RAISED"
                />
                <Button
                    buttonStyle={styles.button}
                    raised
                    backgroundColor={socialColors.linkedin}
                    icon={{ name: "business" }}
                    onPress={() => log()}
                    title="BUTTON RAISED"
                />
                <Button
                    buttonStyle={styles.button}
                    raised
                    backgroundColor={socialColors.pinterest}
                    icon={{ name: "send" }}
                    onPress={() => log()}
                    title="BUTTON RAISED"
                />
                <Button
                    buttonStyle={styles.button}
                    raised
                    onPress={() => log()}
                    title="BUTTON RAISED"
                />
                <Button
                    large={true}
                    buttonStyle={styles.button}
                    onPress={() => log()}
                    backgroundColor={socialColors.facebook}
                    title="LARGE BUTTON"
                />
                <Button
                    large={true}
                    buttonStyle={styles.button}
                    backgroundColor={socialColors.stumbleupon}
                    icon={{ name: "cached" }}
                    title="LARGE BUTTON WITH ICON"
                />
                <Button
                    large={true}
                    buttonStyle={styles.button}
                    backgroundColor={socialColors.quora}
                    raised
                    icon={{ name: "album" }}
                    title="LARGE RAISED WITH ICON"
                />
                <Button
                    large={true}
                    buttonStyle={styles.button}
                    raised
                    iconRight
                    backgroundColor={socialColors.tumblr}
                    icon={{ name: "accessibility" }}
                    title="LARGE RAISED RIGHT ICON"
                />
                <Button
                    large={true}
                    buttonStyle={styles.button}
                    raised
                    iconRight
                    backgroundColor={socialColors.foursquare}
                    icon={{ name: "account-balance" }}
                    title="LARGE RAISED RIGHT ICON"
                />
                <Button
                    large={true}
                    buttonStyle={styles.button}
                    raised
                    backgroundColor={socialColors.vimeo}
                    icon={{ name: "change-history" }}
                    title="LARGE RAISED WITH ICON"
                />
                <Button
                    large={true}
                    buttonStyle={[{ marginBottom: 15, marginTop: 15 }]}
                    icon={{ name: "code" }}
                    backgroundColor={socialColors.twitter}
                    title="LARGE ANOTHER BUTTON"
                />
                <Card title="ICONS" containerStyle={{ marginTop: 15 }}>
                    <View style={[styles.socialRow, { marginVertical: 10 }]}>
                        <Icon
                            onPress={() => navigation.navigate("Icons_Detail")}
                            type="font-awesome"
                            color="#e14329"
                            name="hashtag"
                        />
                        <Icon
                            onPress={() => console.log("hello")}
                            type="font-awesome"
                            color="#02b875"
                            name="rocket"
                        />
                        <Icon
                            onPress={() => console.log("hello")}
                            color="#000000"
                            name="snapchat-ghost"
                            type="font-awesome"
                        />
                        <Icon
                            color="#6441A5"
                            name="btc"
                            type="font-awesome"
                            onPress={() => console.log("hello")}
                        />
                        <Icon
                            color="#f50"
                            name="heartbeat"
                            type="font-awesome"
                            onPress={() => console.log("hello")}
                        />
                    </View>
                    <View style={[styles.socialRow, { marginVertical: 10 }]}>
                        <Icon
                            name="rowing"
                            color="#673AB7"
                            onPress={() => console.log("hello")}
                        />
                        <Icon
                            name="g-translate"
                            color="#03A9F4"
                            onPress={() => console.log("hello")}
                        />
                        <Icon
                            color="#009688"
                            name="sc-telegram"
                            type="evilicon"
                            onPress={() => console.log("hello")}
                        />
                        <Icon
                            color="#8BC34A"
                            name="social-apple"
                            type="foundation"
                            onPress={() => console.log("hello")}
                        />
                        <Icon
                            color="#FFC107"
                            name="ios-american-football"
                            type="ionicon"
                            onPress={() => console.log("hello")}
                        />
                    </View>
                    <View style={styles.socialRow}>
                        <Icon
                            raised
                            name="vpn-key"
                            color="#E91E63"
                            onPress={() => console.log("hello")}
                        />
                        <Icon
                            raised
                            name="ring-volume"
                            color="#3F51B5"
                            onPress={() => console.log("hello")}
                        />
                        <Icon
                            raised
                            color="#00BCD4"
                            name="weekend"
                            onPress={() => console.log("hello")}
                        />
                        <Icon
                            raised
                            color="#CDDC39"
                            name="bubble-chart"
                            onPress={() => console.log("hello")}
                        />
                        <Icon
                            raised
                            color="#FF5722"
                            name="burst-mode"
                            onPress={() => console.log("hello")}
                        />
                    </View>
                    <View style={styles.socialRow}>
                        <Icon
                            reverse
                            raised
                            name="account-balance"
                            color="#673AB7"
                            onPress={() => console.log("hello")}
                        />
                        <Icon
                            reverse
                            raised
                            name="android"
                            color="#03A9F4"
                            onPress={() => console.log("hello")}
                        />
                        <Icon
                            reverse
                            raised
                            color="#009688"
                            name="code"
                            onPress={() => console.log("hello")}
                        />
                        <Icon
                            reverse
                            raised
                            color="#8BC34A"
                            name="card-travel"
                            onPress={() => console.log("hello")}
                        />
                        <Icon
                            reverse
                            raised
                            color="#FF9800"
                            name="extension"
                            onPress={() => console.log("hello")}
                        />
                    </View>
                    <View style={styles.socialRow}>
                        <Icon
                            reverse
                            name="group-work"
                            color="#E91E63"
                            onPress={() => console.log("hello")}
                        />
                        <Icon
                            reverse
                            name="lightbulb-outline"
                            color="#3F51B5"
                            onPress={() => console.log("hello")}
                        />
                        <Icon
                            reverse
                            color="#00BCD4"
                            name="pets"
                            onPress={() => console.log("hello")}
                        />
                        <Icon
                            reverse
                            color="#CDDC39"
                            name="polymer"
                            onPress={() => console.log("hello")}
                        />
                        <Icon
                            reverse
                            color="#FF5722"
                            name="touch-app"
                            onPress={() => console.log("hello")}
                        />
                    </View>
                </Card>
                <Card
                    title="SOCIAL ICONS"
                    containerStyle={[
                        styles.socialRow,
                        { marginTop: 15, marginBottom: 15 },
                    ]}
                >
                    <View style={styles.socialRow}>
                        <SocialIcon
                            raised={false}
                            type="gitlab"
                            onPress={() => console.log("hi!")}
                        />
                        <SocialIcon type="medium" onPress={() => console.log("hi2!")} />
                        <SocialIcon type="github-alt" onPress={() => console.log("hi3!")} />
                        <SocialIcon type="twitch" />
                        <SocialIcon type="soundcloud" />
                    </View>
                    <View style={styles.socialRow}>
                        <SocialIcon
                            raised={false}
                            type="facebook"
                            onPress={() => console.log("hi!")}
                        />
                        <SocialIcon type="twitter" onPress={() => console.log("hi2!")} />
                        <SocialIcon type="instagram" onPress={() => console.log("hi3!")} />
                        <SocialIcon raised={false} type="codepen" />
                        <SocialIcon raised={false} type="youtube" />
                    </View>
                </Card>
                <Card
                    title="LIGHT SOCIAL ICONS"
                    containerStyle={{ marginTop: 15, marginBottom: 15 }}
                >
                    <View style={styles.socialRow}>
                        <SocialIcon
                            light
                            raised={false}
                            type="gitlab"
                            onPress={() => console.log("hi!")}
                        />
                        <SocialIcon
                            light
                            type="medium"
                            onPress={() => console.log("hi2!")}
                        />
                        <SocialIcon
                            light
                            type="github-alt"
                            onPress={() => console.log("hi3!")}
                        />
                        <SocialIcon light type="twitch" />
                        <SocialIcon light type="soundcloud" />
                    </View>
                </Card>
                <Card
                    containerStyle={{ marginTop: 15, marginBottom: 15 }}
                    title="SOCIAL BUTTONS"
                >
                    <SocialIcon button type="medium" />
                    <SocialIcon button type="twitch" />
                    <SocialIcon
                        title="Sign In With Facebook"
                        button
                        fontWeight="400"
                        type="facebook"
                    />
                    <SocialIcon title="Some Twitter Message" button type="twitter" />
                    <SocialIcon
                        light
                        button
                        title="Some Instagram Message"
                        type="instagram"
                    />
                </Card>
                <View style={styles.headingContainer}>
                    <Icon color="white" name="pets" size={62} />
                    <Text style={styles.heading}>Forms</Text>
                </View>
                {this.renderFormsSearchBars()}
                <View style={{ marginTop: 20 }}>
                    <CheckBox title="Click Here" checked />
                    <CheckBox center title="Click Here" checked />
                    <CheckBox title="Click Here" checked right />
                    <CheckBox
                        right
                        title="Click Here"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                    <CheckBox
                        center
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        title="Click Here"
                        checked
                        checkedColor="#4a6da7"
                    />
                    <CheckBox center iconRight title="Click Here" />
                    <CheckBox
                        center
                        iconRight
                        uncheckedIcon="add"
                        checkedIcon="clear"
                        iconType="material"
                        title="Click Here to Add This Item"
                    />
                    <CheckBox
                        center
                        checked
                        iconType="material"
                        checkedIcon="clear"
                        uncheckedIcon="add"
                        iconRight
                        title="Click Here to Remove This Item"
                        checkedColor="red"
                    />
                    <CheckBox center title="Add Phone" uncheckedIcon="plus" />
                    <CheckBox
                        checked
                        center
                        checkedTitle="You Clicked!"
                        title="Click Here"
                        iconType="material"
                        checkedIcon="done"
                        checkedColor="blue"
                        uncheckedColor="red"
                    />
                    <CheckBox
                        center
                        iconType="material"
                        title="Click Here"
                        checkedIcon="accessibility"
                        uncheckedIcon="check-box-outline-blank"
                        checkedColor="blue"
                        uncheckedColor="black"
                    />
                </View>
                <View style={styles.hero}>
                    <Icon color="white" name="games" size={62} />
                    <Text style={styles.heading}>Pricing</Text>
                </View>
                <PricingCard
                    color={colors.primary}
                    title="Free"
                    price="$0"
                    info={["1 User", "Basic Support", "All Core Features"]}
                    button={{ title: "GET STARTED", icon: "flight-takeoff" }}
                />
                <PricingCard
                    color={colors.secondary}
                    title="Starter"
                    price="$19"
                    info={["10 Users", "Basic Support", "All Core Features"]}
                    button={{ title: "GET STARTED", icon: "flight-takeoff" }}
                />
                <PricingCard
                    color={colors.secondary2}
                    title="Enterprise"
                    price="$49"
                    info={["100 Users", "One on One Support", "All Core Features"]}
                    button={{ title: "GET STARTED", icon: "flight-takeoff" }}
                />        
        
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    hero: {
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
        backgroundColor: colors.primary2,
    },
    heading: {
        color: "white",
        marginTop: 10,
        fontSize: 22,
    },
    titleText: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        paddingVertical: 5,
        fontFamily: Platform.OS === "ios" ? "Menlo-Bold" : null,
        color: "#27ae60",
    },
    subtitleText: {
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center",
        fontFamily: Platform.OS === "ios" ? "Trebuchet MS" : null,
        color: "#34495e",
    },
    viewContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    headingContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
        backgroundColor: colors.secondary2,
    },
    labelContainerStyle: {
        marginTop: 8,
    },    
    heading: {
        color: "white",
        marginTop: 10,
        fontSize: 22,
    },
    hero: {
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
        backgroundColor: colors.primary2,
    },
    titleContainer: {},
    button: {
        marginTop: 15,
    },
    title: {
        textAlign: "center",
        color: colors.grey2,
        ...Platform.select({
            ios: {
                fontFamily: fonts.ios.black,
            },
        }),
    },
    socialRow: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
})
