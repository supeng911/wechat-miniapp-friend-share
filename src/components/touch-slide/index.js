import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import AtVideoInfo from './VideoInfo'
import './index.less'

class TouchSlide extends Component {
  render() {
    return (
      <View className='touch-slide-root'>
        <View className='touch-item back-item'>
          <AtVideoInfo src='http://n3-q.mafengwo.net/s12/M00/73/D1/wKgED1w--7SAOcOhAAweIvLAFdg77.jpeg'/>
        </View>

        <View className='touch-item front-item'>
          <AtVideoInfo src='http://b3-q.mafengwo.net/s12/M00/5B/96/wKgED1xAwiKALJbkAA6vDNnM1EM77.jpeg'/>
        </View>
      </View>
    );
  }
}

export default TouchSlide
