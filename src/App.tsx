import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import configureStore from './store/configureStore';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {AppNavigator} from './navigation/AppNavigator';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

const {persistor, store} = configureStore();

const App = (props: any) => {
  console.log(props);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <IconRegistry icons={[EvaIconsPack]} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <AppNavigator />
        </ApplicationProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
