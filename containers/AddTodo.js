import React from 'react'
import { TextInput, Button, View } from 'react-native'
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
    let input

    return (
      <View>
        <TextInput 
          value={this.state.currentText}
          onChangeText={(text) => this.setState({currentText: text})} 
          placeholder='Enter Todo...' 
        />
        <Button
          onPress={() => {
            if (this.state.currentText.trim() == '') {
              alert('Please enter todo');
              return false;
            }
            this.props.dispatch(addTodo(this.state.currentText));
            this.setState({currentText: ''});
          }}
          title='Add Todo'
        />
      </View>
    )
  }
}

export default connect()(AddTodo)