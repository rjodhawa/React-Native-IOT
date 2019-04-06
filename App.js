import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const offURL = 'http://192.168.43.46/gpio/0';
const onURL = 'http://192.168.43.46/gpio/1';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isButtonOn: false,
    }
  }

  onButtonClick(){
    this.setState({
      isButtonOn: !this.state.isButtonOn,
    });
    // if button acts exactly opposite of what it should do. exchange onURL and offURL from below
    var url = this.state.isButtonOn?onURL:offURL;
    fetch(url,{
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: null
    }).then((response)=>{
      console.log('fetch request was sent');
    }).catch((error)=>{
      console.log('error');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress = {()=>this.onButtonClick()}
          style={styles.button}
        >
        <Text style = {styles.buttonText}>{this.state.isButtonOn?'Turn On':'Turn Off'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#990556',
    width: 200,
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 20,
    marginTop: 15,
  }
});
