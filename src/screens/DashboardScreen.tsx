import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Divider,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import {MenuIcon} from '../components/icons';
import {SafeAreaView} from 'react-native-safe-area-context';

export const DashboardScreen = (props): React.ReactElement => {
  const MenuAction = () => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={props.navigation.toggleDrawer}
    />
  );

  return (
    <SafeAreaView>
      <TopNavigation accessoryLeft={MenuAction} />
      <Divider />
    </SafeAreaView>
  );
};
