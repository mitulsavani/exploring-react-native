import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view1} >
        </View>
        <View style={styles.view2} />
        <View style={styles.view3} />
        <View style={styles.view4} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  view1: {
    flex: 0.23,
    backgroundColor: 'pink'
  },
  view2: {
    flex: 1,
    backgroundColor: 'powderblue'
  },
  view3: {
    flex: 1,
    backgroundColor: 'skyblue'
  },
  view4: {
    flex: 2,
    backgroundColor: 'red'
  }
});
