import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  Alert,
  Dimensions
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import styles from './styles';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO    = width / height;
const LATITUDE        = null;
const LONGITUDE       = null;
const LATITUDE_DELTA  = 0.0122;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class Search extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
    };
  }
  
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
            accuracy: position.coords.accuracy
          }
        });
      },
      (error) => alert(error.message),
      { enableHighAccuracy: true, timeout: 30000, maximumAge: 2000}
    );

    this.watchID = navigator.geolocation.watchPosition((position) => {
      const newRegion = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
        accuracy: position.coords.accuracy
      }
      this.setState({newRegion});
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    let { latitude, longitude } = this.state.region;
    if(latitude !== null && longitude !== null) {
      return (
        <View style={styles.container}>
          <MapView
            provider={ PROVIDER_GOOGLE }
            style={styles.map}
            region={this.state.region}
            showsUserLocation={true}
          >
            <Marker 
              coordinate={this.state.region}
              pinColor='#d32f2f'
            />
          </MapView>
        </View>
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