import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyles}>Mitul Savani</Text>
        <Text style={styles.textStyles}>@</Text>
        <Text style={styles.textStyles}>SFSU </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyles: {
    fontSize: 40,
    color: 'white'
  }
});
