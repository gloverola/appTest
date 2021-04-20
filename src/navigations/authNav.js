import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';

const Auth = createStackNavigator();

const AuthNav = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Auth.Screen name="Login" component={Login} />
      <Auth.Screen name="Register" component={Register} />
    </Auth.Navigator>
  );
};

export default AuthNav;
