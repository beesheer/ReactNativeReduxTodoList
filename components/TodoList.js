import React from 'react'
import Todo from './Todo'
import { FlatList } from 'react-native'

class TodoList extends React.Component {
  render() {
    return (
      <FlatList
        style = {{maxHeight: 200, width: '100%', paddingTop: 5}}
        data = {this.props.todos}
        renderItem = {({item}) => {
          return (
            <Todo
              text={item.text} 
              isCompleted={item.isCompleted} 
              onPress={() => this.props.toggleTodo(item.id)} // THIS IS HOW YOU PASS ON TO CHILD. IT IS A FUNCTION!! And it doesn't run the function when in rendering
              // Infinite loop will happen if the function happens to change the state...
            />
          )
        }}
        keyExtractor = {(item, index) => item.id.toString()}
      />
    )
  }
}

export default TodoList