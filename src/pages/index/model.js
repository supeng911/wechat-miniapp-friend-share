import update from 'immutability-helper'
import * as service from './service'


export default {
  namespace: 'IndexModel',
  state: {
    current: 1,
    hasMore: false,
    size: 5,
    total: 0,
    data: [],
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
    * removeFirstItem(_,  {call, put, select}) {
      // 删除第一个元素
      const oldData = yield select(state => state.IndexModel.data)
      // console.log('removeFirstItem 111', oldData)
      const index = oldData.length -1
      const newData = update(oldData, { $splice: [[index, 1]] });
      // console.log('removeFirstItem 222', newData)
      yield put({
        type: 'save',
        payload: {data: newData}
      })

      if (newData.length < 3) {
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
