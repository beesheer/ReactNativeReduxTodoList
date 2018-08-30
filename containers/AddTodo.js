import React from 'react'
import { Text, TextInput, Button, View } from 'react-native'
import { addTodo } from '../actions'
import { connect } from 'react-redux';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentText: ''
    }
  }

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 2, justifyContent: 'flex-end'}}>
          <TextInput
            style={{ flex: 1, marginVertical: 0, paddingVertical: 0, borderWidth: 0, marginBottom: -5}}
            value={this.state.currentText}
            onChangeText={(text) => this.setState({ currentText: text })}
            placeholder='Enter Todo...'
          />
        </View>

        <View style={{ flex: 1, justifyContent: 'flex-end'}}>
          <Button
            style={{ flex: 1 }}
            onPress={() => {
              if (this.state.currentText.trim() == '') {
                alert('Please enter todo');
                return false;
              }
              this.props.dispatch(addTodo(this.state.currentText));
              this.setState({ currentText: '' });
            }}
            title='Add Todo'
          />
        </View>
      </View>
    )
  }
}

export default connect()(AddTodo)