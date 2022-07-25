/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import EditTodoView from './src/Todo1/components/elements/EditTodoView';
import Menu from './src/Todo1/components/elements/Menu';
import TodoList from './src/Todo1/components/elements/TodoList';
import ITodo from './src/Todo1/components/elements/TodoModel';

const App = () => {
  const [data, setData] = useState<ITodo[]>([]);
  const [isEditTodoVisible, setIsEditTodoVisible] = useState(false);

  // const addTodo = () => {
  //   setIsEditTodoVisible(true);
  // };

  const onCloseEditTodo = () => {
    setIsEditTodoVisible(false);
  };

  const onSaveTodo = (data: ITodo) => {
    setData(d => [...d, data]);
    setIsEditTodoVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.title}>TODO</Text>
          <TodoList data={data} />
          {/* <Menu onAddTodo={addTodo} /> */}
          <EditTodoView
            isVisible={isEditTodoVisible}
            onClose={onCloseEditTodo}
            onSaved={onSaveTodo}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    paddingBottom: 0,
  },
});

export default App;
