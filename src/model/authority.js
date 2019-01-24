import Taro from '@tarojs/taro'
import action from "../utils/action";
import request from "../utils/request";
import delay from "../utils/delay";

export default {
  namespace: 'authority',
  state: {

  },
  reducers: {
    save(state, {payload}) {
      return {...state, ...payload};
    },
  },
  effects: {
    * fetch(_, {all, call, put}) {
      console.log('this is init')
    },
  },
};
