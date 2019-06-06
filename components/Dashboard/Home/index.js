import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import styles from './styles';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<Text style={styles.header}> Home </Text>
      </View>
    );
  }
}


export default Home;