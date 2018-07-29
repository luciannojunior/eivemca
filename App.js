import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RootNavigator } from './src/navigation/RootNavigator';
import * as firebase from 'firebase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

var config = {
  apiKey: "AIzaSyAHACJD2UD8MYk1gm2zC4_F5NnVnql9QyI",
  authDomain: "eivemca-1bc0b.firebaseapp.com",
  databaseURL: "https://eivemca-1bc0b.firebaseio.com",
  projectId: "eivemca-1bc0b",
  storageBucket: "eivemca-1bc0b.appspot.com",
  messagingSenderId: "168937478213"
};

firebase.initializeApp(config);

export default class App extends React.Component {
  render() {
    return (
      <RootNavigator />
    );
  }
}
