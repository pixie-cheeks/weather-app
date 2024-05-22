/* eslint-disable import/no-import-module-exports */
import './index.css';
import './scripts/eventHandler';

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}
