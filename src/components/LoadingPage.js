import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

const CurrentWeather = () => {
  const appName = "BookyCare";


  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Image 
          style={styles.image}
          source={require('./../../assets/bookycare_logo-text.jpg')} 
        />
        <AntDesign name="loading1" size={36} color="black" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({ 
  wrapper: {
    backgroundColor: '#fff',
    flex: 1,
  },
  container: {
    justifyContent: 'center',       // Vertically
    alignItems: 'center',           // Horizontally
    flex: 1,
  },
  image: {
    width: '100%',
    height: '50%',
    resizeMode: 'contain',
  }
});

export default CurrentWeather