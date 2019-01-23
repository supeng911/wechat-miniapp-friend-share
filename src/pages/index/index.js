import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import AtAvatar from '../../components/avatar'
import AtNoteInfo from '../../components/note-info'
import AtTouchSlide from '../../components/touch-slide'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.less'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {

  config = {
    "navigationBarBackgroundColor": "#100E1B",
    "navigationBarTextStyle": "white",
    "navigationBarTitleText": "朋友分享",
    "backgroundColor": "#100E1B",
    "backgroundTextStyle": "light"
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index-container'>
        <View className='touch-container'>
          <AtTouchSlide />
        </View>
        <View className='relation-container'>
          <AtNoteInfo />
        </View>
      </View>
    )
  }
}

export default Index
