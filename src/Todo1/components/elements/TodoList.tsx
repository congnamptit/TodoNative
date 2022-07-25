/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Todo from './Todo';
import ITodo from './TodoModel';

interface ITodoListProps {
  data: ITodo[];
}

const TodoList = (props: ITodoListProps) => {
  const [isDone, setIsDone] = useState(false);

  return (
    <FlatList
      style={styles.container}
      data={props.data}
      renderItem={(item: any) => {
        return <Todo data={item.item} />;
      }}
      keyExtractor={(item, index) => item.id}
    />
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    // height: '100%', maxHeight: '100%',
    height: 500,
    width: '100%',
    flexDirection: 'column',
    padding: 10,
    overflow: 'scroll',
  },
});
