import Taro, {Component} from '@tarojs/taro'
import {View, Image} from '@tarojs/components'
import PropTypes from "prop-types";
import oss_image from '../../utils/oss_image'
import {formatStr} from '../../utils/format'
import AtAvatar from "../avatar"
import AtPraiseBtn from '../praise-btn'
import PicWechat from '../../assets/pic_wechat.png'
import IconFull from '../../assets/icon_full.png'
import PicVideoPlayButton from '../../assets/pic_video_play_button.png'
import './index.less'


class VideoInfo extends Component {

  render() {
    const {data} = this.props

    return (
      <View className='video-info' style={{backgroundImage: `url(${oss_image(data.cover, [660,990])})`}}>
        <Image className='play-btn' src={PicVideoPlayButton} />
        <View className='note-about'>
          <View className='name'>@{data.author.nickName}</View>
          <View className='about'>{formatStr(data.about, 80)}</View>
        </View>
        <View className='control-ext'>
          <AtAvatar
            shape='slide-white-circle'
            src={oss_image(data.author.face, [42,42])}
          />

          <AtPraiseBtn />

          <View className='share-btn'>
            <Image className='icon' src={PicWechat} />
            <View className='num'>1337</View>
          </View>

          <View className='full-btn'>
            <Image className='icon' src={IconFull} />
            <View className='num'>全屏</View>
          </View>
        </View>
      </View>
    );
  }
}

VideoInfo.propTypes = {
  data: PropTypes.object,
}

VideoInfo.defaultProps = {
  data: {}
}


export default VideoInfo
