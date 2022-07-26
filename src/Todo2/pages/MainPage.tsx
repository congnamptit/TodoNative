import React, {useCallback, useState} from 'react';
import {Icon, VStack, useColorModeValue, Fab} from 'native-base';
import {AntDesign} from '@expo/vector-icons';
import shortid from 'shortid';
import AnimatedColorBox from '../components/elements/AnimatedColorBox';
import Masthead from '../components/elements/Masthead';
import NavBar from '../components/elements/NavBar';
import TaskList from '../components/elements/TaskList';

const initialData = [
  {
    id: shortid.generate(),
    subject: 'Torture your sibilings',
    done: false,
  },
  {
    id: shortid.generate(),
    subject: 'Study Physics',
    done: false,
  },
];

export default function MainScreen() {
  const [data, setData] = useState(initialData);
  const [editingItemId, setEditingItemId] = useState<string | null>(null);

  const handleToggleTaskItem = useCallback((item: any) => {
    setData(prevData => {
      const newData = [...prevData];
      const index = prevData.indexOf(item);
      newData[index] = {
        ...item,
        done: !item.done,
      };
      return newData;
    });
  }, []);
  const handleChangeTaskItemSubject = useCallback(
    (item: any, newSubject: any) => {
      setData(prevData => {
        const newData = [...prevData];
        const index = prevData.indexOf(item);
        newData[index] = {
          ...item,
          subject: newSubject,
        };
        return newData;
      });
    },
    [],
  );
  const handleFinishEditingTaskItem = useCallback((_item: any) => {
    setEditingItemId(null);
  }, []);
  const handlePressTaskItemLabel = useCallback((item: any) => {
    setEditingItemId(item.id);
  }, []);
  const handleRemoveItem = useCallback((item: any) => {
    setData(prevData => {
      const newData = prevData.filter(i => i !== item);
      return newData;
    });
  }, []);

  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'primary.900')}
      w="full">
      <Masthead
        title="What's your plan🚀"
        image={require('../../assets/images/masthead.png')}>
        <NavBar />
      </Masthead>
      <VStack
        flex={1}
        space={1}
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px"
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        pt="20px">
        <TaskList
          data={data}
          onToggleItem={handleToggleTaskItem}
          onChangeSubject={handleChangeTaskItemSubject}
          onFinishEditing={handleFinishEditingTaskItem}
          onPressLabel={handlePressTaskItemLabel}
          onRemoveItem={handleRemoveItem}
          editingItemId={editingItemId}
        />
      </VStack>
      <Fab
        position="absolute"
        renderInPortal={false}
        size="sm"
        icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
        colorScheme={useColorModeValue('blue', 'darkBlue')}
        bg={useColorModeValue('blue.500', 'blue.400')}
        onPress={() => {
          const id = shortid.generate();
          setData([
            {
              id,
              subject: '',
              done: false,
            },
            ...data,
          ]);
          setEditingItemId(id);
        }}
      />
    </AnimatedColorBox>
  );
}
