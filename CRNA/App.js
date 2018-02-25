import React from 'react';
import {  StyleSheet, Text, View, ScrollView, Image, Button, Alert } from 'react-native';



export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.view1}>
        </View>
        <View style={styles.view2}>
          <Image style={styles.mainimage} source = {require('./Holi.jpg')} />
        </View>
        <View style={styles.view3}>
          <Image style={styles.subimage} source = {require('./buddha.jpg')} />
          <Image style={styles.subimage} source = {require('./hanuman.png')} />
        </View>
        <View style={styles.view4}>
          <View style={{
              backgroundColor: 'red',
              padding: 10,
              borderRadius: 16,
              shadowRadius: 20,
              shadowOpacity: 0.5} }>

            <Button onPress={() => {
              Alert.alert("You pressed the button")
            }}
            title="Button"
            color= 'white'
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex:1,
    backgroundColor: 'white',
    flexDirection: 'column'
  },
  text:
  {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  },
  mainimage: {
    width: 400,
    height: 200,
    
  },
  subimage: {
    width: 160,
    height: 160,
    shadowOpacity: 0.5
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 16,
    shadowRadius: 20,
    shadowOpacity: 0.5
  },
  view1: {
    flex: 1,
    backgroundColor: 'wheat',
    height: 35
  },
 
  view2: {
    flex: 1,
    height: 200,
    backgroundColor: 'pink'
  },
  view3: {
    flex: 1,
    flexDirection: 'row',
    height: 200,
    backgroundColor: '#374F5B',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  },
  view4: {
    flex: 4,
    backgroundColor: 'white',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
