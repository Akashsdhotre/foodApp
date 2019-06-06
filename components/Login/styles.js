import React from 'react';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F9F9',
        paddingLeft: 15,
        paddingRight: 15
      },
      logoContainer: {
        alignItems:'center',
        flexGrow:1,
        justifyContent:'center'
  
      },
      logo: {
        marginTop:30,
        width:100,
        height:100
      },
      title: {
        color:'#828282',
        marginTop:10,
        marginBottom:30,
        opacity:0.9
      },

      input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderWidth: 1,
        borderColor: "#828282",
        color: '#828282',
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5
            
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