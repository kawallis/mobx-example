import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider as MobxProvider } from 'mobx-react'
import {store} from './Store'
ReactDOM.render(<MobxProvider store={store}><App /></MobxProvider>
    , document.getElementById('root'));
registerServiceWorker();
