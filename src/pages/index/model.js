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
  },
};
