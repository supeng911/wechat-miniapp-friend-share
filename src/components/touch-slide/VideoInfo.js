import Taro, {Component} from '@tarojs/taro'
import {View, Image, Text} from '@tarojs/components'
import AtAvatar from "../avatar"
import AtPraiseBtn from '../praise-btn'
import PicWechat from '../../assets/pic_wechat.png'
import IconFull from '../../assets/icon_full.png'
import PicVideoPlayButton from '../../assets/pic_video_play_button.png'
import './index.less'


class VideoInfo extends Component {

  render() {

    const {src} = this.props

    return (
      <View className='video-info' style={{backgroundImage: `url(${src})`}}>
        <Image className='play-btn' src={PicVideoPlayButton} />
        <View className='note-about'>
          <View className='name'>@美国新秀POT</View>
          <View className='about'>
            好的风景，不只是优美#视觉符号#的传递
            与艺 人专辑整体风格的契合。从而达到
            个性的。。。
          </View>
        </View>
        <View className='control-ext'>
          <AtAvatar
            shape='slide-white-circle'
            src='http://p2-q.mafengwo.net/s11/M00/A5/4D/wKgBEFplx2WAbN7wAAkx9C0WxCk54.jpeg'
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

export default VideoInfo
