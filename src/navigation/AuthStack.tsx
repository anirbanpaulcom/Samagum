import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '../screens/auth/RegisterScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import { VerifyOtpScreen } from '../screens/auth';
import IntroScreen from '../intro/IntroScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPassword';
import WelcomeScreen from '../screens/welcome/WelcomeScreen';
import CategoriesScreen from '../screens/categories/CaegoriesScreen';
import InterestsScreen from '../screens/interests/InterestsScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"SplashScreen"}
    >
      <Stack.Screen
        name="IntroScreen"
        component={IntroScreen}
      />

      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
      />

      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
      />

      <Stack.Screen
        name="VerifyOtpScreen"
        component={VerifyOtpScreen}
      />

      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />

      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
      />

      <Stack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
      />

      <Stack.Screen
        name="InterestsScreen"
        component={InterestsScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
