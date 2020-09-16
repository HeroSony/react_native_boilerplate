import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {FixingListScreen} from '../screens/FixingListScreen';

const Stack = createStackNavigator();

export const FixingListNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Dashboard" component={FixingListScreen} />
  </Stack.Navigator>
);
