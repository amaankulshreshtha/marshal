import * as coreHooks from './hooks';
import coreStore from './store';
import * as coreUI from './ui';

const Core = {
  hooks: coreHooks,
  ui: coreUI,
  store: coreStore
};

export const hooks = coreHooks;
export const ui = coreUI;
export const store = coreStore;

export default Core;
