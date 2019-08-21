import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

class TabBarIcon extends React.Component {

  render() {
    const { focused, name } = this.props
    return (
        <Ionicons
          name={name}
          size={26}
          style={{ marginBottom: -3 }}
          color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
    );
  }

}


export default TabBarIcon;