import update from 'immutability-helper'
import * as service from './service'
import {makeListData, listData} from '../../mock-data'


export default {
  namespace: 'IndexModel',
  state: {
    hasNext: true,
    list: [],
  },
  reducers: {
    save(state, {payload}) {
      return {...state, ...payload};
    },
  },
  effects: {
    * fetch(_, {call, put}) {
      const res = yield call(makeListData, {offset:0, size:5})
      yield put({type: 'save', payload: res});
    },
    * removeFirstItem(_,  { put, select}) {
      // 删除第一个元素
      const oldList = yield select(state => state.IndexModel.list)
      // console.log('removeFirstItem 111', oldData)
      const index = oldList.length -1
      const newList = update(oldList, { $splice: [[index, 1]] });
      // console.log('removeFirstItem 222', newData)
      yield put({
        type: 'save',
        payload: {list: newList}
      })

      if (newList.length < 3) {
        // 少于 3 个元素， 加载更多内容
        yield put({
          type: 'loadMore',
        })
      }
    },
    * loadMore(_, { put, select}) {
      const oldState = yield select(state => state.IndexModel)
      const response = listData;
      const newState = update(oldState, {
        hasNext: { $set: response.hasNext },
        list: { $unshift: response.list },
      })

      yield put({type: 'save', payload: newState});

    }
  },
};
