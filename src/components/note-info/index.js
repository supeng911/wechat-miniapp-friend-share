import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import RelationshipInfo from './RelationshipInfo'
import AtAvatar from '../avatar'

import './index.less'

class NoteInfo extends Component {
  render() {
    return (
      <View className='note-info-root'>
        <View className='relationship'>
          <AtAvatar
            shape='gradual-circle'
            src='http://p2-q.mafengwo.net/s11/M00/A5/4D/wKgBEFplx2WAbN7wAAkx9C0WxCk54.jpeg'
          />
          <View className='people-info'>
            <View className='top'><Text className='name'>吴亦凡</Text><Text className='praise'>认为好嗨呦</Text></View>
            <View className='bottom' >TA是你的6°朋友</View>
          </View>
        </View>

        <Button className='control-btn'>人脉地图</Button>
      </View>
    )
  }
}

export default NoteInfo;
