import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Course from './Course';
import UserData from './UserData';
import CourseDetails from './CourseDetails';




const Stack = createNativeStackNavigator();

const NavigationRoute = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' >
                {/* home screen */}
                <Stack.Screen
                    name='Home'
                    options={{ headerShown: false }}>
                    {(props) => <Home {...props} myName={"sagar solanki"} />}
                </Stack.Screen>

                {/* course screen */}
                <Stack.Screen
                    name='Course'
                    component={Course}
                    options={{
                        headerTitleStyle: { fontSize: 25 },
                        headerTitle: 'Courses',
                        headerTitleAlign: "center"
                    }}
                />

                {/* userData screen */}
                <Stack.Screen
                    name='Student'
                    component={UserData}
                    options={{
                        headerTitleStyle: { fontSize: 25 },
                        headerTitle: 'Students Data',
                        headerTitleAlign: "center"
                    }} />

                {/* About screen */}
                <Stack.Screen
                    name='About'
                    component={About}
                    options={{
                        headerTitleStyle: { fontSize: 25 },
                        headerTitleAlign: "center",
                    }} />

                {/* Contact screen */}
                <Stack.Screen
                    name='Contact'
                    component={Contact}
                    options={{
                        headerTitleStyle: { fontSize: 25 },
                        headerTitleAlign: "center",
                        // headerStyle:{backgroundColor:"#CCD3CA"}
                    }} />

                {/* CourseDetails Screen  */}
                <Stack.Screen
                    name="CourseDetails"
                    component={CourseDetails}
                    options={{
                        headerTitleStyle: {
                            fontSize: 25,
                            fontFamily: "Nunito_600SemiBold",
                        },
                        headerTitleAlign: "center",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationRoute