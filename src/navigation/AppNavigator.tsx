import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {HomeNavigator} from './HomeNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
/*
 * Navigation theming: https://reactnavigation.org/docs/en/next/themes.html
 */
const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // prevent layout blinking when performing navigation
    background: 'transparent',
  },
};

export const AppNavigator = (): React.ReactElement => (
  <SafeAreaProvider>
    <NavigationContainer theme={navigatorTheme}>
      <HomeNavigator />
    </NavigationContainer>
  </SafeAreaProvider>
);
