import React, { Component } from 'react';
import { View, TouchableOpacity, Text, TextInput, ActivityIndicator } from 'react-native';
import firebase from 'firebase';

class LoginForm extends Component {
  state = { 
    loading: false,
    email: '',
    password: ''
  };
  
  onButtonPress() {
    
    this.setState({
      loading: true
    });

    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(error => {
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(error => {
      });
    });
  }

  loadSpinner() {
    if (this.state.loading) {
      return <ActivityIndicator size="small" />
    }

    return (
      <TouchableOpacity onPress={()=>this.onButtonPress()} style={styles.buttonStyle}>
        <Text style={styles.textStyle}>
          ログイン
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View>
        <View style={styles.wrap}>
          <TextInput
              placeholder="user@gmail.com"
              autoCorrect={false}
              style={styles.inputStyle}
              onChangeText={(email) => this.setState({email})}
            />
        </View>
        <View style={styles.wrap}>
          <TextInput
              secureTextEntry
              placeholder="password"
              autoCorrect={false}
              style={styles.inputStyle}
              onChangeText={(password) => this.setState({password})}
            />
        </View>

        <View style={styles.wrap}>
          {this.loadSpinner()}
        </View>
      </View>
    )
  }
}

const styles = {
  wrap: {
    padding: 10
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 10,
    paddingTop: 10
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff'
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    height: 30,
    borderWidth: 1,
    borderColor: '#333'
  }
}

export default LoginForm;
    borderColor: '#007aff'
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    height: 30,
    borderWidth: 1,
    borderColor: '#333'
  }
}

export default LoginForm;
