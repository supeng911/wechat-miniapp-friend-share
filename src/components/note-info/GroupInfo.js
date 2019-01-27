import Taro, { Component } from '@tarojs/taro'
import { View, Image, Button } from '@tarojs/components'
import PropTypes from "prop-types";
import oss_image from '../../utils/oss_image'
import './index.less'


class GroupInfo extends Component {
  render() {
    const {data} = this.props
    return (
      <View className='note-info-root'>
        <View className='group-info'>
          <View className='group-cover'>
            <Image className='img' src={oss_image(data.group.cover, [72,72])} />
          </View>

          <View className='group-name'>
            <View className='top'>{data.group.title}</View>
            <View className='bottom' >
              {data.dimension}位好友已加入
            </View>
          </View>
          <View className='face-group'>
            <Image className='img' src='http://p2-q.mafengwo.net/s12/M00/E2/61/wKgED1w_NRGAQwJ0AACiyHGbECo35.jpeg' />
            <Image className='img' src='http://p1-q.mafengwo.net/s10/M00/02/87/wKgBZ1iS9JaABXe_AACSDHGkDT459.jpeg' />
            <Image className='img' src='http://n4-q.mafengwo.net/s10/M00/A0/5B/wKgBZ1iZRgeACGnmAAf4KdXCD1c95.jpeg' />
          </View>

        </View>
        <Button className='control-btn'>加入TA们</Button>
      </View>
    );
  }
}


GroupInfo.propTypes = {
  data: PropTypes.object,
}

export default GroupInfo;
