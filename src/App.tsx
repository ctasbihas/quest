import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const HomeScreen = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen!</Text>
      <Text style={styles.subtitle}>Start building your app here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
  },
});

export default HomeScreen;
