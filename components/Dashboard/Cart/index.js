import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import styles from './styles'

class Cart extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<Text style={styles.header}> Cart </Text>
      </View>
    );
  }
}



export default Cart;