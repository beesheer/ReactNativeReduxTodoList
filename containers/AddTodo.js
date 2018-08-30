import React from 'react'
import { TextInput, Button, View } from 'react-native'
import { addTodo } from '../actions'
import { connect } from 'react-redux';

class AddTodo extends React.Component {
  render() {
    let input

    return (
      <View>
        <TextInput ref={node => input = node} />
        <Button
          onPress={() => {
            //alert('test');
            //console.log(addTodo(input._lastNativeText));
            console.log(input._lastNativeText);
            this.props.dispatch(addTodo(input._lastNativeText));
            //console.log(input.value);
            input.setNativeProps({text: ''})
          }}
          title='Add Todo'
        />
      </View>
    )
  }
}

export default connect()(AddTodo)