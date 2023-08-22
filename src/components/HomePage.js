import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text>
            BookyCare
        </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default HomePage