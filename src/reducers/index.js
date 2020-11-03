import { combineReducers } from 'redux';

import events from './events';
import operationLogs from './operationLogs';

export default combineReducers({ events, operationLogs }); //state全体を配列からobjectに変更しているため、修正が必要
