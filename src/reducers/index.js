import { combineReducers } from 'redux';

import events from './events';

export default combineReducers({ events }); //state全体を配列からobjectに変更しているため、修正が必要
