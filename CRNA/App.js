import React from 'react';
import {  StyleSheet, Text, View, ScrollView, Image, Button, Alert, TextInput, Keyboard, FlatList } from 'react-native';


var backgroundcolors = ['green', '#9B3069', '#D93750', '#4D9397', 'orange', 'blue', 'purple', 'pink', 'yellow', 'aqua'];
var members = require('./assets/constants');

export default class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      backgroundColor: '#B67086',
      text: '',
    };
  }

  changeBackground = () => {
    var backgroundColor = backgroundcolors[Math.floor(Math.random()*backgroundcolors.length)];

    this.setState({
        backgroundColor: backgroundColor,
      });
  }

  handleSubmit = () => 
  {
    const { text } = this.state
    
    if (this.state.text === 'Passionate') {
      Keyboard.dismiss
      Alert.alert(
        'Success',
        'Lets play a festival of colors; Holi',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false })
    } 
    else {
      Keyboard.dismiss
      Alert.alert(
        'Invalid',
        'Ima PASSIONATE tutor',
        [
          { text: 'Try again', onPress: () => console.log('Try again pressed') }
        ],
        { cancelable: false }
      )
    }
  }
  renderItem = ({item}) => (
    <View style={styles.listItem}>
      <Image style={styles.listAvatar} source={{uri: item.image}} />
      <Text style={styles.listName}>{item.name}</Text>
      <Text style={styles.listUsername}>@{item.github_username}</Text>
    </View>
  );

  render() {
    
    return (
      <ScrollView style={styles.container}>
        <View style={styles.view1}>
        </View>
        <View style={styles.view2}>
          <Image style={styles.mainimage} source = {require('./assets/Holi.jpg')} />
        </View>
        <View style={styles.view3}>
          <Image style={styles.subimage} source = {require('./assets/handholi.jpg')} />
          <Image style={styles.subimage} source = {require('./assets/holyface1.jpg')} />
        </View>
        <View style={[styles.view4, {backgroundColor: this.state.backgroundColor}]} >
          <View style={{
              backgroundColor: '#9FB89B',
              padding: 10,
              borderRadius: 16,
              shadowRadius: 20,
              shadowOpacity: 0.5}}>

              <Button onPress={() => this.changeBackground()}
              title="Throw Colors"
              color= 'black' />
          </View>
        </View>
        <View style={styles.view5}>
              <TextInput
              style={styles.inputContainer}
              value={this.state.text}
              onChangeText={(text) => this.setState({text})}
              onSubmitEditing={this.handleSubmit}
              />
        </View>
        <View style={styles.view6}>
          <FlatList
            keyExtractor={(item, index) => index}
            data={members}
            renderItem={this.renderItem}
          />
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

  inputContainer: {
    height: 50,
    fontSize: 25, 
    borderColor: '#EFB599', 
    borderRadius: 10,
    borderWidth: 1, 
    alignItems: 'center',
    color: 'white',
    shadowOpacity: 0.5,
  },

  listItem: {
    padding: 10, 
    alignItems: 'center', 
    justifyContent: 'center', 
    height: 50, 
    flex: 1, 
    flexDirection: 'row', 
    backgroundColor: '#F6CFAF'
  },
  listAvatar: {
    width: 40, 
    height: 40, 
    borderRadius: 20
  }, 
  listName: {
    paddingLeft: 10, 
    flex: 1, 
    color: '#5B6D85', 
    fontWeight: 'bold'
  }, 
  listUsername: {
    color: 'gray'
  },
  view1: {
    flex: 1,
    backgroundColor: 'wheat',
    height: 30
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
    //backgroundColor: '#6A5D7B',
    backgroundColor: 'black',

    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  },
  view4: {
    height: 400,
    justifyContent: 'center',
    alignItems: 'center'
  },
  view5: {
    flex: 1,
    backgroundColor: '#E37982',
    height: 200,
    padding: 60,
    justifyContent: 'center',
    alignContent: 'center'
  },
  view6: {
    height: 600,
    backgroundColor: 'lightpink'
  }
});
