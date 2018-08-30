import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import VisibleTodoList from './containers/VisibleTodoList'
import AddTodo from './containers/AddTodo'

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AddTodo />
          <VisibleTodoList />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
