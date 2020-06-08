import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import './styles/tailwind.css';
import {rootReducer} from "./reducers/reducers";
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>,
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
