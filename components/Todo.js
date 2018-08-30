import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Todo extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: 'row', borderBottomWidth: 1, flex: 1, borderBottomColor: '#ececec'}}>
        <Text style={{ fontSize: 10, color: 'green', paddingRight: 5, textAlignVertical: 'center' }}>
          {this.props.isCompleted ? 'Done' : ''}
        </Text>
        <Text
          style={{
            display: 'flex',
            textDecorationLine: this.props.isCompleted ? 'line-through' : 'none',
            fontSize: 30,
            padding: 10
          }}
          onPress={this.props.onPress} // Return a passed function from parent. It is in props.
        >
          {this.props.text}
        </Text>
      </View>
    )
  }
}

export default Todo