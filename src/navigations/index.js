import React, {useContext} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import HomeNav from './homeNav';
import AuthNav from './authNav';
import {GlobalContext} from '../context/authContext';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const AppNavContainer = () => {
  const {
    authState: {isAuthenticated},
  } = useContext(GlobalContext);

  return (
    <NavigationContainer theme={theme}>
      {isAuthenticated ? <HomeNav /> : <AuthNav />}
    </NavigationContainer>
  );
};

export default AppNavContainer;
