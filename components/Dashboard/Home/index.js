import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform
} from 'react-native';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import styles from './styles';


class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000, fastInterval: 5000})
      .then(data => {
      }).catch(err => { });
    }
  }

  render() {
    return (
      <View style={styles.container}>
      	<Text style={styles.header}> Home </Text>
      </View>
    );
  }
}


export default Home;