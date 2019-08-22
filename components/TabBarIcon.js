import React from 'react';
import { Feather } from '@expo/vector-icons';
import Colors from '../constants/Colors';

class TabBarIcon extends React.Component {

  render() {
    const { focused, name, tabBarLabel, tintColor } = this.props
    return (
      <Feather
        name={name}
        size={26}
        style={{ marginBottom: 0 }}
        color={focused ? tintColor : "#222222"} //tabBarLabel === "New" ? Colors.backgroundTabBar : tabBarLabel === "Old" ? Colors.backgroundTabBarOld : tabBarLabel === "User" ? Colors.backgroundTabBarUser : Colors.tabIconDefault
      />
    );
  }



}


export default TabBarIcon;