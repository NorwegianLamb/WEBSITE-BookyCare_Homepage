import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'

const App = () => {
  const appName = "BookyCare";
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Image 
          style={styles.image}
          source={require('./assets/bookycare_logo-text.jpg')} 
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({ 
  wrapper: {
    flex: 1,
  },
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',       // Vertically
    alignItems: 'center',           // Horizontally
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
});

export default App;