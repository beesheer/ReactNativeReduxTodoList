import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Todo extends React.Component {
  render() {
    return (
      <Text
        style={{
          display: 'flex', 
          fontSize: 30, 
          borderBottomWidth: 1, 
          flex: 1, 
          borderBottomColor: '#ececec' 
        }}
        onPress={this.props.onPress} // Return a passed function from parent. It is in props.
      >
        <Text style={{fontSize: 10, paddingRight: 10, color: 'green'}}>
          {this.props.isCompleted ? 'Done' : ''}
        </Text>
        <Text
          style={{
            textDecorationLine: this.props.isCompleted ? 'line-through' : 'none', 
          }}>
          {this.props.text}
        </Text>
      </Text>
    )
  }
}

export default Todo