import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/core';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DashboardNavigator} from './DashboardNavigator';
import {FixingListNavigator} from './FixingListNavigator';
import {HomeDrawer} from '../components/HomeDrawer/HomeDrawerComponent';
import {HomeBottomNavigation} from './HomeBottomNavigation';
// import {DashboardScreen} from '../screens/DashboardScreen';
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const ROOT_ROUTES: string[] = ['Dashboard', 'FixingList'];

const isOneOfRootRoutes = (currentRoute: RouteProp<any, any>): boolean => {
  return ROOT_ROUTES.find((route) => currentRoute.name === route) !== undefined;
};

const TabBarVisibleOnRootScreenOptions = ({
  route,
}): BottomTabNavigationOptions => {
  const currentRoute = route.state && route.state.routes[route.state.index];
  return {tabBarVisible: currentRoute && isOneOfRootRoutes(currentRoute)};
};

const DashboardTabsNavigator = (): React.ReactElement => (
  <BottomTab.Navigator
    screenOptions={TabBarVisibleOnRootScreenOptions}
    initialRouteName={'Dashboard'}
    tabBar={(props) => <HomeBottomNavigation {...props} />}>
    <BottomTab.Screen name="Dashboard" component={DashboardNavigator} />
    {/* <BottomTab.Screen name="FixingList" component={FixingListNavigator} /> */}
  </BottomTab.Navigator>
);

export const HomeNavigator = (): React.ReactElement => (
  <Drawer.Navigator
    screenOptions={{swipeEnabled: false}}
    drawerContent={(props) => <HomeDrawer {...props} />}>
    <Drawer.Screen name="Dashboard" component={DashboardTabsNavigator} />
    {/* <Drawer.Screen name="Dashboard" component={DashboardScreen} /> */}
  </Drawer.Navigator>
);
