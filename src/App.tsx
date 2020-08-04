import React from 'react';
import { Provider } from 'react-redux'
import ShowList from './components/index'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <ShowList />
    </Provider>
  );
}

export default App;
