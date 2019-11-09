import React from 'react';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import App from './src/App';

export const wrapRootElement = ({ element }) => <App>{element}</App>;
