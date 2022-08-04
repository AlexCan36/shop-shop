import { newStore } from 'redux';
import reducer from '../utils/reducers'

const store = newStore(reducer);
export default store; 