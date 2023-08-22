import React from 'react'
import { View, StyleSheet } from 'react-native'
import LoadingPage from './src/components/LoadingPage'
import HomePage from './src/components/HomePage'

const App = () => {
  return(
    <View style={styles.container}>
      {/*-----------------------*/}
      <LoadingPage/>
      {/*-----------------------*/}
      <HomePage/>
      {/*-----------------------*/}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App