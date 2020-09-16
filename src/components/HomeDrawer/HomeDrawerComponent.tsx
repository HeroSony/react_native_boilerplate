import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {
  Layout,
  Divider,
  Drawer,
  DrawerItem,
  Text,
  Avatar,
} from '@ui-kitten/components';
import {ArrowIosForwardIcon} from '../../components/icons';
import {AppInfoService} from '../../services/app-info.service';

const version: string = AppInfoService.getVersion();

const Header = (props) => (
  <Layout style={styles.header} level="2">
    <View style={styles.profileContainer}>
      <Avatar
        size="giant"
        source={require('../../assets/images/app-icon.png')}
      />
      <Text style={styles.profileName} category="h6">
        Kitten Tricks
      </Text>
    </View>
  </Layout>
);

const Footer = () => (
  <>
    <Divider />
    <Text style={styles.footer} category="c2">
      Version {version}
    </Text>
  </>
);

export const HomeDrawer = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  return (
    <Drawer
      header={Header}
      footer={Footer}
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}>
      <DrawerItem
        title="Users"
        // accessoryLeft={PersonIcon}
        accessoryRight={ArrowIosForwardIcon}
      />
      <DrawerItem
        title="Orders"
        // accessoryLeft={BellIcon}
        accessoryRight={ArrowIosForwardIcon}
      />
    </Drawer>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 128,
    paddingHorizontal: 16,
    justifyContent: 'center',
    paddingTop: 20,
  },
  footer: {
    paddingVertical: 16,
    paddingLeft: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    marginHorizontal: 16,
  },
});
