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
    New: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: 'New',
    tabBarIcon: ({ focused, tintColor }) => (
      <TabBarIcon
        tintColor={tintColor}
        getColor={getColor.bind(this)}
        tabBarLabel='New'
        navigation={navigation}
        focused={focused}
        name={'clipboard'}
      />
    ),
  }
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Old: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: 'Old',
    tabBarIcon: ({ focused, tintColor }) => (
      <TabBarIcon
        tintColor={tintColor}
        getColor={getColor.bind(this)}
        tabBarLabel='Old'
        navigation={navigation}
        focused={focused}
        name={'briefcase'} />
    ),
  }
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    User: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: 'User',
    tabBarIcon: ({ focused, tintColor }) => (
      <TabBarIcon
        tintColor={tintColor}
        tabBarLabel='User'
        navigation={navigation}
        focused={focused}
        lolosh={focused ? 1 : 0}
        name={'user'}
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
    New: HomeStack,
    Old: LinksStack,
    User: SettingsStack

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
      // activeColors={Colors.tabIconSelected}
      activeColors={[Colors.tabIconSelected, Colors.tabIconSelectedOld, Colors.tabIconSelectedUser]}
      // activeTabBackgrounds={Colors.backgroundTabBarUser}
      activeTabBackgrounds={[Colors.backgroundTabBar, Colors.backgroundTabBarOld, Colors.backgroundTabBarUser]}
      // activeTabBackground={}
      {...props}
    />,
  }
);

const getColor = (type) => {
  console.log(type);

  switch (type) {
    case "New":
      return Colors.tabIconSelected;
    case "Old":
      return Colors.tabIconSelectedOld;
    case "User":
      return Colors.tabIconSelectedUser;
    case "NewBackground":
      return Colors.backgroundTabBar;
    case "OldBackground":
      return Colors.backgroundTabBarOld;
    case "UserBackground":
      return Colors.backgroundTabBarUser;
    default:
      return Colors.backgroundTabBar;
  }
}

tabNavigator.path = '';

export default tabNavigator;
