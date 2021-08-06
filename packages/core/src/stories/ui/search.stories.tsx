import { Meta } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import Search from '../../ui/Search';

const meta: Meta = {
  title: Search.name,
  component: Search,
  decorators: [
    Story => {
      return (
        <Provider store={store}>
          <Story />
        </Provider>
      );
    }
  ]
};

export default meta;

export const Default = () => <Search data={Array.from(new Array(10)).map((_, index) => index.toString())} />;
