import { store, ui } from '@marshal/core';
import { Provider } from 'react-redux';
const { Search } = ui;

export default function WebApp() {
  return (
    <Provider store={store}>
      <Search data={Array.from(new Array(10)).map((_, index) => index.toString())} />
    </Provider>
  );
}
