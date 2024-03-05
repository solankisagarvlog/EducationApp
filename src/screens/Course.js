import React from 'react'
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Courses from './API/Course'


const Course = ({ navigation }) => {

    const courseCard = ({ item }) => {
        return (
            <View style={styles.mainContainer} >
                <View style={styles.corseContainer}>
                    <View>
                        <Image style={styles.cardImage}
                            source={item.image}
                            resizeMode="contain"
                        />
                    </View>
                    <Text style={styles.mainHeadertitle}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>

                    <View style={styles.btnContain}>
                        <TouchableOpacity style={styles.btnStyles}
                            onPress={() => navigation.navigate('CourseDetails', { courseId: item.id, })}
                        >
                            <Text style={styles.btnText}>Course Details</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View>
            <FlatList
                keyExtractor={(item) => item.id}
                data={Courses}
                renderItem={courseCard}
            />
        </View>
    )
}

export default Course

const styles = StyleSheet.create({

    mainContainer: {
        paddingHorizontal: 20,
    },

    corseContainer: {
        padding: 30,
        backgroundColor: "rgba(255,255,255,0.90)",
        textAlign: "center",
        borderRadius: 10,
        shadowColor: "grey",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
        marginVertical: 30,
    },

    cardImage: {
        width: "100%",
        height: undefined,
        aspectRatio: 1
    },

    mainHeadertitle: {
        fontSize: 22,
        color: "#344055",
        textTransform: "uppercase",
        paddingBottom: 15,
        fontWeight: "700",
        textAlign: "center",
        //fontFamily:"mhbfkhbfejwejkfkefkjwe"  //add karneka
    },

    description: {
        textAlign: "left",
        //fontFamily:"mhbfkhbfejwejkfkefkjwe"  //add karneka
        fontSize: 18,
        paddingBottom: 20,
        lineHeight: 23,
        color: "#7d7d7d"
    },

    btnContain: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },

    btnStyles: {
        backgroundColor: "skyblue",
        width: 160,
        height: 50,
        borderRadius: 12,
        elevation: 5,
        alignItems: "center",
        justifyContent: "center",
        display: "flex"
    },

    btnText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#331D2C",
        //fontFamily:"snjdhjef" //add karneka
    }
})