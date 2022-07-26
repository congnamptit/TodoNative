import {createDrawerNavigator} from '@react-navigation/drawer';
import SideBar from './components/elements/SiderBar';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import React from 'react';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      drawerContent={props => <SideBar {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
        overlayColor: '#000000',
      }}>
      <Drawer.Screen name="Main" component={MainPage} />
      <Drawer.Screen name="About" component={AboutPage} />
    </Drawer.Navigator>
  );
};

export default App;
