import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import ITodo from './TodoModel';

interface ITodoProps {
  data: ITodo;
}

const Todo = (props: ITodoProps) => {
  const [isDOne, setIsDone] = useState(false);
  return (
    <View style={(styles.container, {backgroundColor: props.data.color})}>
      <BouncyCheckbox
        fillColor="black"
        unfillColor="red"
        iconStyle={{borderColor: 'black'}}
        isChecked={isDOne}
        onPress={setIsDone}
        style={styles.checkbox}
      />
      <Text style={styles.text}>{props.data.text}</Text>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: '30px',
    height: 'auto',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5,
    padding: 10,
    borderRadius: 5,
  },
  checkbox: {
    width: 40,
    minWidth: 40,
    height: 40,
  },
  text: {
    color: 'black',
    width: '100%',
  },
});
