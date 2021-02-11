import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TelaA from './src/Views/TelaA'
import TelaB from './src/Views/TelaB'
import TelaC from './src/Views/TelaC'

import Routes from './src/routes/index'

export default function App() {
  return (
      <Routes />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
