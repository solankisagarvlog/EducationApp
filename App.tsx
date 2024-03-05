import React from 'react'
import NavigationRoute from './src/screens/NavigationRoute'
import { StatusBar, View } from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle={"dark-content"} />
      <NavigationRoute />
    </>
  )
}

export default App;