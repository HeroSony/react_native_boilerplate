import React from 'react';
import {
  BottomNavigationTab,
  Divider,
  BottomNavigation,
} from '@ui-kitten/components';
import {HomeOutlineIcon} from '../components/icons';
import {SafeAreaLayout} from '../components/safe-area-layout.component';

export const HomeBottomNavigation = (props): React.ReactElement => {
  const onSelect = (index: number): void => {
    props.navigation.navigate(props.state.routeNames[index]);
  };
  return (
    <>
      <Divider />
      <BottomNavigation
        appearance="noIndicator"
        selectedIndex={props.state.index}
        onSelect={onSelect}>
        <BottomNavigationTab title="Dashboard" icon={HomeOutlineIcon} />
        {/* <BottomNavigationTab title="Fixing List" icon={HomeOutlineIcon} /> */}
      </BottomNavigation>
    </>
  );
};
