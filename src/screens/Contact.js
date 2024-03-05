import React, { useState } from 'react'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import CheckBox from '@react-native-community/checkbox';


const Contact = ({ navigation }) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [message, setMessage] = useState("")
    const [agree, setAgree] = useState(false)

    const submit = () => {

        if (!name && !email && !number && !message) {
            Alert.alert('plz fill all the fields')
        } else {
            Alert.alert(`Thank You ${name}`)
            navigation.navigate("Home");
        }
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}>Level up your knowledge </Text>
            {/* <Text style={styles.description}>You can reach us anytime via sagarsolanki29200@gmail.com </Text> */}

            <View style={styles.inputContainer}>
                <Text style={styles.lables}>Enter your name</Text>
                <TextInput
                    style={styles.inputStyle}
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.lables}>Enter your email</Text>
                <TextInput
                    style={styles.inputStyle}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.lables}>Enter your number</Text>
                <TextInput
                    style={styles.inputStyle}
                    value={number}
                    onChangeText={(text) => setNumber(text)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.lables}>How can we  help you ?</Text>
                <TextInput
                    style={[styles.inputStyle, styles.multilineStyle]}
                    placeholder='Tell us about your self'
                    numberOfLines={5}
                    multiline={true}
                    value={message}
                    onChangeText={(text) => setMessage(text)}
                />
            </View>

            {/* checkBox */}
            <View style={styles.wrapper}>
                <CheckBox
                    value={agree}
                    onValueChange={() => setAgree(!agree)}
                    color={agree ? "skyblue" : undefined}
                />
                <Text style={styles.wrapperText}>I have read and agreed with the TC</Text>
            </View>

            {/* submit button */}
            <TouchableOpacity
                style={[styles.btnStyle, { backgroundColor: agree ? "skyblue" : "#FFA732" }]}
                disabled={!agree}
                onPress={submit}
            >
                <Text style={styles.btnText}>Contact Us</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Contact;

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        paddingHorizontal: 30,
        backgroundColor: "#CCD3CA"
    },

    mainHeader: {
        fontSize: 20,
        color: "#344055",
        fontWeight: "700",
        paddingTop: 20,
        paddingBottom: 15,
        //fontFamily:"hefjkqewfa" //add karneka
        textTransform: "capitalize",
        textAlign: "center"
    },

    description: {
        fontSize: 20,
        color: "#7d7d7d",
        paddingBottom: 20,
        //fontFamily:"jkskhv" //add karneka
        lineHeight: 25
    },

    inputStyle: {
        borderWidth: 1,
        // borderColor: "rgba(0,0,0,0.4)",
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 10,
        marginTop: 5,
        fontSize: 16
    },

    inputContainer: {
        marginTop: 27
    },

    lables: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#45474B",
        paddingBottom: 5,
        //fontFamily:"jkskhv" //add karvu
        lineHeight: 25
    },

    multilineStyle: {
        paddingVertical: 4
    },

    btnStyle: {
        borderRadius: 22,
        shadowColor: "#000",
        elevation: 5,
        paddingVertical: 10,
        paddingHorizontal: 18,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 30,
        width: 300,
        height: 50,
        alignSelf: "center"
    },

    btnText: {
        fontSize: 20,
        color: "#950101",
        fontWeight: "bold"
    },

    wrapper: {
        display: "flex",
        flexDirection: "row",
        marginTop: 20,
        //fontFamily:"gfdhqw" //add karneka
    },
    
    wrapperText: {
        fontSize: 16,
        marginLeft: 10,
        fontWeight: '900',
        color: "#526D82"
    }
})