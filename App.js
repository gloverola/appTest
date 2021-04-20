import React from 'react';
import AppNavContainer from './src/navigations/index';
import {GlobalProvider} from './src/context/authContext';

const App = () => {
  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  );
};

export default App;
