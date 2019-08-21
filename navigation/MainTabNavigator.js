import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { TabBar } from "react-native-animated-nav-tab-bar";

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Colors from '../constants/Colors';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        tabBarLabel='Home'
        navigation={navigation}
        focused={focused}
        name={
          Platform.OS === 'ios'
            ? `ios-information-circle${focused ? '' : '-outline'}`
            : 'md-information-circle'
        }
      />
    ),
  }
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: 'Links',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        tabBarLabel='Links'
        navigation={navigation}
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
    ),
  }
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        tabBarLabel='Settings'
        navigation={navigation}
        focused={focused}
        lolosh={focused ? 1 : 0}
        name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
      />
    ),
  };
}

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator(
  //   HomeStack,
  //   LinksStack,
  //   SettingsStack,
  // },
  //   {
  //     tabBarOptions: {
  //       style: {
  //         backgroundColor: "#f1f1fe",
  //         height: 60
  //       },
  //       showLabel: false
  //     }
  //   }
  {
    Home: HomeStack,
    Links: LinksStack,
    Settings: SettingsStack

  }, {
    tabBarOptions: {
      activeTintColor: Colors.tabIconSelected,
      inactiveTintColor: Colors.tabIconDefault,
      style: {
        backgroundColor: "#f1f1fe",
        height: 60
      },
      showLabel: false
    },

    tabBarComponent: props => <TabBar
      activeTabBackground={Colors.backgroundTabBar}
      {...props}
    />,
  }
);

tabNavigator.path = '';

export default tabNavigator;
