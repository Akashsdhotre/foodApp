import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import styles from './styles';

class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<Text style={styles.header}> Search </Text>
      </View>
    );
  }
}


export default Search;