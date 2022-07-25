import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

interface IMenu {
  onAddTodo: () => void;
}

const Menu = (props: IMenu) => {
  return (
    <View style={styles.container}>
      <Button title="+ Add Todo" onPress={() => props.onAddTodo} />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: '30px',
    height: 'auto',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
  },
});
