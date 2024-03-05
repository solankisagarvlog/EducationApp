import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Menu from './component/Menu'


const Home = (props) => {

    const description = `My name is Solanki Sagar and I have completed B.Com graduation and I am interested in developing mobile application I want to develop my skills further.`

    return (
        <View style={styles.mainContainer}>
            <View style={styles.homeTop}>
            <Text style={styles.mainTitle}>online Education App</Text>
                <Image style={styles.headerImage}
                    resizeMode='contain'
                    source={require('../../assets/Person.webp')}
                />
                <Text style={styles.mainHeader}>Welcome to </Text>
                <Text style={[styles.mainHeader, { fontSize: 30, color: '#4c5dab', marginTop: 0 }]}> {props.myName}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
            <View style={styles.menuStyle}>
                <View style={[styles.lineStyle, { marginBottom: 10 }]}></View>
                <Menu />
                <View style={styles.lineStyle}></View>
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        display: "flex",
        justifyContent: 'space-between',
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        textAlign: "center",
    },
    
    mainTitle:{
        fontSize: 28,
        color: "#344055",
        textTransform: "uppercase",
        color: '#4c5dab',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 8
    },

    homeTop: {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        // paddingHorizontal:10,
    },

    headerImage: {
        height: undefined,
        width: "100%",
        aspectRatio: 1,
        display: "flex",
        alignItems: "stretch",
        marginTop: 25,
        marginBottom: 20,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOpacity: 10,
        backgroundColor: "#EED3D9"
    },

    mainHeader: {
        fontSize: 28,
        color: "#344055",
        textTransform: "uppercase"
        //fontFamily:"snjdhjefwef" //add karneka
    },

    description: {
        textAlign: "left",
        fontSize: 19,
        color: "#344055",
        marginTop: 20,
        paddingBottom: 28,
        lineHeight: 26,
        
        //fontFamily:"snjdhjefsef" //add karvani
    },

    menuStyle: {
        marginBottom: 5
    },

    lineStyle: {
        marginBottom: 5,
        borderWidth: 0.6,
        borderColor: "grey",
    }
})