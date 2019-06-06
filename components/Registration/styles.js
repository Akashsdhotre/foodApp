import React from 'react';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F9F9'
  },
  inputBox: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#828282',
    width: 300,
    marginBottom: 20
  },
  headerText: {
    fontSize: 30,
    textAlign: 'center',
    color: '#828282',
    marginBottom: 20
  },
  buttonContainer: {
    backgroundColor: '#dc7533',
    paddingVertical: 15,
    marginBottom:10,
    borderRadius: 5
  },

  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700'
  }
});

export default styles;