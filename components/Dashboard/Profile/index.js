import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import styles from './styles';

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<Text style={styles.header}> Profile </Text>
      </View>
    );
  }
}



export default Profile;