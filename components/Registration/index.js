import React, { Component } from 'react';
import styles from './styles'
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput
} from 'react-native';

class Registration extends Component {
  constructor(props) {    
    super(props);
    this.state = { 
      text: '' 
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
        <View style={styles.headerStyle}>
          <View>
            <Text style={styles.headerText}> Registration </Text>
          </View>
          <TextInput
            style={styles.inputBox}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placeholder = 'Enter Mobile No.'
            placeholderTextColor = "rgba(130,130,130,0.5)"
          />

          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate("DashBoard")}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Registration;