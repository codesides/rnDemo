import React from 'react';
import {ThemeProvider} from 'react-native-elements';
import Routers from '@src/routers';

import {Provider} from 'react-redux';
import store from '@src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Routers />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
