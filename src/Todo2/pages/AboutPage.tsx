/* eslint-disable react/react-in-jsx-scope */
import {Feather} from '@expo/vector-icons';
import {
  Box,
  Icon,
  Image,
  ScrollView,
  Text,
  useColorModeValue,
  VStack,
} from 'native-base';
import AnimatedColorBox from '../components/elements/AnimatedColorBox';
import LinkButton from '../components/elements/LinkButton';
import Masthead from '../components/elements/Masthead';
import NavBar from '../components/elements/NavBar';

const AboutPage = () => {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
      w="full">
      <Masthead
        title="About this App"
        image={require('../../assets/images/abt-head.jpg')}>
        <NavBar />
      </Masthead>
      <ScrollView
        borderTopLeftRadius={'20px'}
        borderTopRightRadius={'20px'}
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px"
        pt="30px"
        p={4}>
        <VStack flex={1} space={4}>
          <Box alignItems={'center'}>
            <Image
              source={require('../../assets/images/profilepic.jpg')}
              borderRadius="full"
              resizeMode="cover"
              w={120}
              h={120}
              alt="author"
            />
          </Box>
          <Text fontSize="md" w="full">
            This is a simple project by me
          </Text>
          <LinkButton
            colorScheme="red"
            size="lg"
            borderRadius="full"
            href={'https//google.com'}
            leftIcon={
              <Icon as={Feather} name="Google" size="sm" opacity={0.5} />
            }>
            Go to Google.com
          </LinkButton>
          <LinkButton
            colorScheme={useColorModeValue('blue', 'darkBlue')}
            size="lg"
            borderRadius={'full'}
            href={'https//facebook.com'}
            leftIcon={
              <Icon as={Feather} name="facebook" size="sm" opacity={0.5} />
            }>
            Cong Nam
          </LinkButton>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  );
};

export default AboutPage;
