import update from 'immutability-helper'
import * as service from './service'


export default {
  namespace: 'IndexModel',
  state: {
    nextOffset: 0,
    ieEnd: false,
    list: [],
  },
  reducers: {
    save(state, {payload}) {
      return {...state, ...payload};
    },
  },
  effects: {
    * fetch(_, {call, put}) {
      const res = yield call(service.getFeedList, {});
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
    * loadMore(_, {call, put, select}) {
      const oldState = yield select(state => state.IndexModel)
      // FIXME
      const response = yield call(service.getFeedList, {});

      const newState = update(oldState, {
        current: { $set: response.current },
        hasMore: { $set: response.hasMore },
        size: { $set: response.size },
        total: { $set: response.total },
        data: { $unshift: response.data },
      })

      yield put({type: 'save', payload: newState});

    }
  },
};
