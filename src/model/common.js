
export default {
  namespace: 'common',
  state: {

  },
  reducers: {
    save(state, {payload}) {
      return {...state, ...payload};
    },
  },
  effects: {
    * fetch(_, {all, call, put}) {
      console.log('this is common init')
    },
  },
};
