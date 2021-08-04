import { ui } from '@marshal/core';

const { Search } = ui;

export default function WebApp() {
  return <Search data={Array.from(new Array(10)).map((_, index) => index.toString())} />;
}
