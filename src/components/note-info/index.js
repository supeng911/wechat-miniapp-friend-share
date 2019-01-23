import Taro, { Component } from '@tarojs/taro'
import { View, Image, Button, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import IconRelationArrowGray from '../../assets/icon_relation_arrow_gray.png'

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
            src='https://n3-q.mafengwo.net/s12/M00/3E/40/wKgED1xIHaOAKkFLAAA2R0-9lfQ52.jpeg'
          />
          <View className='people-info'>
            <View className='top'><Text className='name'>吴亦凡</Text><Text className='praise'>认为好嗨呦</Text></View>
            <View className='bottom' >TA是你的6°朋友</View>
          </View>
          <Image className='arrow' src={IconRelationArrowGray} />
          <View className='face-group'>
            <Image className='img' src='http://p2-q.mafengwo.net/s12/M00/E2/61/wKgED1w_NRGAQwJ0AACiyHGbECo35.jpeg' />
            <Image className='img' src='http://p1-q.mafengwo.net/s10/M00/02/87/wKgBZ1iS9JaABXe_AACSDHGkDT459.jpeg' />
            <Image className='img' src='http://n4-q.mafengwo.net/s10/M00/A0/5B/wKgBZ1iZRgeACGnmAAf4KdXCD1c95.jpeg' />
          </View>
          <Image className='arrow sec' src={IconRelationArrowGray} />
          <AtAvatar
            shape='gray-circle'
            src='http://b3-q.mafengwo.net/s11/M00/B0/93/wKgBEFrZWJGAMQhjAA0Nueb1ej047.jpeg'
          />
        </View>
        <Button className='control-btn'>人脉地图</Button>
      </View>
    )
  }
}

export default NoteInfo;
