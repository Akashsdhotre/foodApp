import React, { Component } from 'react';
import styles from './styles'

import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator  
} from 'react-native';
import { isModuleSpecifier } from '@babel/types';

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      mobileNo: "",
      password: ""
    }

    this.handlePress = this.handlePress.bind(this)
  }

  fetchData(){
    console.warn("mobile No and password",this.state.mobileNo +","+this.state.password)
  }

  handlePress(e) {  
    e.preventDefault()
    this.fetchData()
    this.props.navigation.navigate("DashBoard");
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
    
        <View style={styles.logoContainer}>
          <Image
           style={styles.logo}
           source={require('./images/logo.png')} />
           <Text style={styles.title}>Food Delivery App</Text>
        </View>
        <View style={styles.formContainer}></View>
          <TextInput 
            style={styles.input}
            placeholder="Mobile No."
            placeholderTextColor= "rgba(130,130,130,0.7)" 
            returnKeyType="next"
            keyboardType="phone-pad"
            onChangeText={ text => this.setState({mobileNo:text}) }
          />
          <TextInput 
            style={styles.input}
            placeholder="Password"
            placeholderTextColor= "rgba(130,130,130,0.7)" 
            returnKeyType="next"
            secureTextEntry
            onChangeText={ text => this.setState({password:text}) }
          />

          <TouchableOpacity
            activeOpacity={0.6}
            style={ styles.buttonContainer}
            onPress={ handlePress = this.handlePress}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
            <Text 
              onPress={() => this.props.navigation.navigate("Registration")}
              style={{color: "#000", marginBottom: 30}}
            >
              Create New Account ?
          </Text>
          
      </KeyboardAvoidingView>
    );
  }
}


export default Login;