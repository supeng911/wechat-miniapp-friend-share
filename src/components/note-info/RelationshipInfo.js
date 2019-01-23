import Taro, {Component} from '@tarojs/taro'
import {View, Button} from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import AtAvatar from "./index";

import './index.less'


class RelationshipInfo extends Component {

  render() {
    return (
      <View className='note-info-root'>
        <View className='relationship'>
          <AtAvatar
            shape="gradual-circl"
            src="http://p2-q.mafengwo.net/s11/M00/A5/4D/wKgBEFplx2WAbN7wAAkx9C0WxCk54.jpeg"
          />
          <View className='people-info'>
            <View>asdasd</View>
          </View>
        </View>

        <Button className='control-btn'>人脉地图</Button>
      </View>
    );
  }
}

export default RelationshipInfo
