
export default {
  namespace: 'share',
  state: {
    title: '朋友分享DEMMO',
    path: '/pages/index/index',
    imageUrl: null
  },
  reducers: {
    save(state, {payload}) {
      return {...state, ...payload};
    },
  },
  effects: {
    * shareHomePage(_, { put}) {
      const state = {
        title: '朋友分享DEMMO',
        path: '/pages/index/index',
        imageUrl: null
      }
      yield put({type: 'save', payload: state});
    },
  },
};
