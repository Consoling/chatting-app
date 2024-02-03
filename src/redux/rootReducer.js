import {combineReducers} from 'redux';
// import { KEY_PREFIX } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appReducer from './slices/app';

// slices

const rootPersistConfig = {
    key: 'root',
    storage,
    key_prefix: 'redux-',
}

const rootReducer = combineReducers({
    app: appReducer,

})

export {rootReducer, rootPersistConfig}