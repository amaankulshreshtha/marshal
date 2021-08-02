import { Meta } from '@storybook/react';
import React from 'react';
import Search from '../../ui/Search';

const meta: Meta = {
  title: Search.name,
  component: Search
};

export default meta;

export const Default = () => <Search data={['a', 'b', 'c']} />;
