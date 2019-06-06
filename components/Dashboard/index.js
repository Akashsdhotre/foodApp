import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Home from'./Home';
import Cart from'./Cart';
import Search from'./Search';
import Profile from'./Profile';  
import Icon from 'react-native-vector-icons/AntDesign';
import IconBag from 'react-native-vector-icons/SimpleLineIcons';


const Dashboard = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'HOME',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" color={tintColor} size={24} />
      )
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      tabBarLabel: 'SEARCH',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="search1" color={tintColor} size={24} />
      )
    }
  },
  Cart: {
    screen: Cart,
    navigationOptions: {
      tabBarLabel: 'CART',
      tabBarIcon: ({ tintColor }) => (
        <IconBag name="handbag" color={tintColor} size={24} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="user" color={tintColor} size={24} />
      )
    }
  }
},
{
  tabBarOptions: {
    activeTintColor: 'orange',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      elevation: 5
    }
  }
}
);


export default Dashboard;