import {Feather} from '@expo/vector-icons';
import {
  Box,
  HStack,
  Icon,
  Input,
  Pressable,
  useColorModeValue,
  useToken,
} from 'native-base';
import React, {useCallback} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import AnimatedCheckbox from 'react-native-checkbox-reanimated';
import {PanGestureHandlerProps} from 'react-native-gesture-handler';
import AnimatedTaskLable from './AnimatedTaskLable';
import SwipableView from './SwipableView';

interface Props extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  isEditing: boolean;
  isDone: boolean;
  onToggleCheckbox?: () => void;
  onPressLabel?: () => void;
  onRemove: () => void;
  onChangeSubject?: (subject: string) => void;
  onFinishEditing?: () => void;
  subject: string;
}

const TaskItem = (props: Props) => {
  const {
    isEditing,
    isDone,
    onToggleCheckbox,
    onPressLabel,
    onRemove,
    onChangeSubject,
    onFinishEditing,
    subject,
    simultaneousHandlers,
  } = props;

  const highlightColor = useToken(
    'colors',
    useColorModeValue('blue.500', 'blue.400'),
  );

  const boxStroke = useToken(
    'colors',
    useColorModeValue('muted.300', 'muted.500'),
  );

  const checkmarkColor = useToken(
    'colors',
    useColorModeValue('white', 'white'),
  );

  const activeTextColor = useToken(
    'colors',
    useColorModeValue('darkText', 'lightText'),
  );

  const doneTextColor = useToken(
    'colors',
    useColorModeValue('muted.400', 'muted.600'),
  );

  const handleChangeSubject = useCallback(
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      onChangeSubject && onChangeSubject(e.nativeEvent.text);
    },
    [onChangeSubject],
  );

  return (
    <SwipableView
      simultaneousHandlers={simultaneousHandlers}
      onSwipeLeft={onRemove}
      backView={
        <Box>
          <Icon color={'white'} as={<Feather name="trash-2" />} size="sm" />
        </Box>
      }>
      <HStack
        alignItems="center"
        w="full"
        px={4}
        py={2}
        bg={useColorModeValue('warmGray.50', 'primary.900')}>
        <Box w={30} height={30} mr={2}>
          <Pressable onPress={onToggleCheckbox}>
            <AnimatedCheckbox
              highlightColor={highlightColor}
              checkmarkColor={checkmarkColor}
              boxOutlineColor={boxStroke}
              checked={isDone}
            />
          </Pressable>
        </Box>
        {isEditing ? (
          <Input
            placeholder="Task"
            value={subject}
            variant="unstyled"
            fontSize={19}
            px={1}
            py={0}
            autoFocus
            blurOnSubmit
            onChange={handleChangeSubject}
            onBlur={onFinishEditing}
          />
        ) : (
          <AnimatedTaskLable
            textColor={activeTextColor}
            inactiveTextColor={doneTextColor}
            strikethrough={isDone}
            onPress={onPressLabel}>
            {subject}
          </AnimatedTaskLable>
        )}
      </HStack>
    </SwipableView>
  );
};

export default TaskItem;
