import {createStore,persist} from 'easy-peasy';
import {dados} from './objects';

export const store = createStore(persist(dados));






