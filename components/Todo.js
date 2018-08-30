import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Todo extends React.Component {
  render() {
    return (
      <Text 
        style={{ textDecorationLine: this.props.isCompleted ? 'line-through' : 'none', fontSize: 30}}
        onPress={this.props.onPress} // Return a passed function from parent. It is in props.
      >
        {this.props.text}
      </Text>
    )
  }
}

export default Todo