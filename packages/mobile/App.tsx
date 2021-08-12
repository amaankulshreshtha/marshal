import { ui } from '@marshal/core';

declare const global: { HermesInternal: null | {} };
console.log(!!global.HermesInternal);
const { App } = ui;

export default App;
