import update from 'immutability-helper'
import {videoData, articleData} from '../../mock-data'


export default {
  namespace: 'DetailModel',
  state: {
    id: 0,
    type: null,
  },
  reducers: {
    save(state, {payload}) {
      return {...state, ...payload};
    },
  },
  effects: {
    * fetchVideo(_, {put}) {
      console.log('video model',videoData )
      yield put({type: 'save', payload: videoData});
    },
    * fetchArticle(_, {put}) {
      yield put({type: 'save', payload: articleData});
    },
  },
};
