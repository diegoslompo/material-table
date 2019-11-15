import { createStore } from 'redux';
import { Reducers } from '../reducers';
import middleware from '../middleware'

const store = createStore(Reducers, middleware);

export default store;