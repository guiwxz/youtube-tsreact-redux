import React from 'react';
import { Provider } from 'react-redux'
import ShowList from './components/index'
import store from './store'

import GlobalStyles from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <ShowList />

      <GlobalStyles />
    </Provider>
  );
}

export default App;
