import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Image, StyleSheet } from 'react-native'

const UserData = () => {

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => {
        try {
            const response = await fetch('https://thapatechnical.github.io/userapi/users.json')
            const realData = await response.json();
            setData(realData);
            setIsLoaded(false);
            // console.log(realData);
        }
        catch (error) {
            console.log(error);
        }
    }

    // render the students cards
    const showUserData = ({ item }) => {
        return (
            <View style={styles.card}>
                <View style={styles.imgContainer}>
                    <Image style={styles.imgStyle} source={{ uri: item.image }} />
                </View>

                <View style={styles.bioDatacontainer}>
                    <Text style={styles.bioData}> Bio-Data </Text>
                    <Text style={styles.idNumber}>
                        {item.id < 10 ? `#0${item.id}` : `#{item.id}`}
                    </Text>
                </View>

                <View style={styles.mainContaine}>
                    <Text style={styles.myName}>Name: {item.name}</Text>
                    <Text style={styles.myName}>Email: {item.email}</Text>
                    <Text style={styles.myName}>Mobile No: {item.mobile}</Text>
                </View>
            </View>
        )
    }

    return (
        <View>
            <Text style={styles.mainHeader}>List of Students</Text>
            <FlatList
                keyExtractor={(item) => item.id}
                data={data}
                renderItem={showUserData}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default UserData;

const styles = StyleSheet.create({
    card: {
        width: 290,
        height: 480,
        backgroundColor: "#fff",
        borderRadius: 5,
        margin: 20
    },

    mainContaine: {
        width: "100%",
        minHeight: "100%",
        paddingVertical: 50,
        backgroundColor: "#ebedee"
    },

    bioDatacontainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#088395",
        paddingVertical: 10,
        paddingRight: 10
        //fontFamily:"mnbdmb" //add karneka
    },

    idNumber: {
        fontSize: 22,
        color: "#fff",
        //fontFamily:"mnbdmb" //add karneka
    },

    bioData: {
        fontSize: 25,
        color: "#fff",
        //fontFamily:"mnbdmb" //add karneka
    },

    mainHeader: {
        fontSize: 30,
        color: "#a18ce5",
        textAlign: "center",
        marginTop: 10
        //fontFamily:"mnbdmb" //add karneka
    },

    imgContainer: {
        padding: 10,
    },

    imgStyle: {
        width: "100%",
        height: 300,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOpacity: 0.5
    },

    mainContaine: {
        padding: 10,
        backgroundColor: "#088395",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    
    myName: {
        fontSize: 16,
        color: "#fff",
        marginBottom: 10,
        textTransform: "capitalize",
        //fontFamily:"mnbdmb" //add karneka
    }
})