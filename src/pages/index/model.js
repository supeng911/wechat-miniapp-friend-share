import * as service from './service'

export default {
  namespace: 'IndexModel',
  state: {
    current: 1,
    hasNext: false,
    size: 5,
    data: [],
  },
  reducers: {
    save(state, {payload}) {
      return {...state, ...payload};
    },
  },
  effects: {
    * fetch(_, {all, call, put}) {
      console.log('fetch init', service)
      const res = yield call(service.getFeedList, {});
      console.log('this is common init', res)
    },
  },
};
