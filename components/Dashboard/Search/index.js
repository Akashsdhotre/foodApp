import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import AndroidOpenSettings from 'react-native-android-open-settings'
import styles from './styles';

class Search extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      latitude: null,
      longitude: null
    };
  }
  async componentDidMount() {
    AndroidOpenSettings.locationSourceSettings();
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
      });
    },
    error => this.setState({ error: error.message }),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000}
    );
  }

  render() {
    let { latitude, longitude } = this.state;
    // Alert.alert("latitude "+ latitude + " longitude "+ longitude);
    if(latitude !== null && longitude !== null) {
      return (
        <MapView
          provider={ PROVIDER_GOOGLE }
          style={ styles.map }
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.021,
          }}
        >
          <Marker coordinate={this.state} />
        </MapView>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={{fontSize: 20}}> Loading .... </Text>
        </View>
      );
    }
  }
}



export default Search;