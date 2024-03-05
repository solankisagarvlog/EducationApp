import React from 'react'
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import me from '../../assets/me.jpg';

const About = () => {
    return (
        <View style={styles.aboutContainer}>
            <Text style={styles.mainHeader}>solanki sagar b</Text>
            <Text style={styles.paraStyle}>I am a React Native Developer 😀 </Text>
            <View>
                <Image style={styles.imgStyle} source={me} />
            </View>
            <View style={styles.aboutLayout}>
                <Text style={styles.aboutSubHeader}> About me </Text>
                <Text style={[styles.paraStyle, styles.aboutText]}>My name is Solanki Sagar and I am a React-Native developer.
                    - I am a student of BCom graduate with a passion for mobile app development. I have learned C, C++, HTML, CSS, Bootstrap, JavaScript, ReactJS, React-Native.</Text>
            </View>
            <Text style={styles.followText}>Follow me  on Social Network </Text>
            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={() => Linking.openURL('https://www.instagram.com/')}>
                    <Image style={styles.iconStyle}
                        source={require("../../assets/insta.webp")}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={() => Linking.openURL('https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile')}>
                    <Image style={styles.iconStyle}
                        source={require("../../assets/in.webp")}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={() => Linking.openURL('https://www.youtube.com/')}>
                    <Image style={styles.iconStyle}
                        source={require("../../assets/youtub.webp")}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default About;

const styles = StyleSheet.create({
    aboutContainer: {
        display: "flex",
        alignItems: "center"
    },

    imgStyle: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginBottom: 22
    },

    mainHeader: {
        fontSize: 18,
        color: "#344055",
        textTransform: "uppercase",
        fontWeight: "500",
        marginTop: 27,
        marginBottom: 10,
        // fontFamily:'Gill Sans', //add karneka
        lineHeight: 30
    },

    myHeadertext: {
        paddingBottom: 10
    },

    paraStyle: {
        fontSize: 18,
        color: "#7d7d7d",
        paddingBottom: 23,
    },

    aboutLayout: {
        backgroundColor: "#4c5dab",
        paddingHorizontal: 30,
        // paddingVertical: 30,
        paddingBottom: 20,
        borderRadius: 10,
        shadowColor: "#000",
        elevation: 5
    },
    
    aboutSubHeader: {
        fontSize: 19,
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "500",
        marginVertical: 20,
        // fontFamily:'Gill Sans',// aadd karneka
        alignSelf: "center",
    },

    aboutText: {
        color: "#fff",
        // padding: 10,
        // textShadowColor:"#000",
        lineHeight: 25
    },

    followText: {
        fontSize: 20,
        marginVertical: 20,
        marginTop: 38,
        color: "#000",
        fontWeight: "500"
    },

    menuContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },

    iconStyle: {
        width: "100%",
        height: 65,
        aspectRatio: 1
    }
})