import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, View,StyleSheet, Image } from 'react-native'

const Menu = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.btnStyles} onPress={() => navigation.navigate("Course")}>
                <Image style={styles.iconStyles} source={{ uri: 'https://cdn1.iconfinder.com/data/icons/education-941/512/Online_Learning_1.png' }} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnStyles} onPress={() => navigation.navigate("Student")}>
                <Image style={styles.iconStyles} source={{ uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/teamwork-7894167-6383080.png' }} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnStyles} onPress={() => navigation.navigate("About")}>
                <Image style={styles.iconStyles} source={{ uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/info-4856469-4047573.png?f=webp' }} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnStyles} onPress={() => navigation.navigate("Contact")}>
                <Image style={styles.iconStyles} source={{ uri: 'https://img.freepik.com/premium-vector/ringing-phone-icon-3d-illustration-isolated-white-background_593228-95.jpg' }} />
            </TouchableOpacity>
        </View>
    )
}
export default Menu;

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginBottom: 10
    },
    
    btnStyles: {
    },

    iconStyles: {
        width: "100%",
        height: 55,
        aspectRatio: 1,
        // marginTop:5
    }
})
