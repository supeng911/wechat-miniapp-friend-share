import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Video, CoverView, Image } from '@tarojs/components'
import oss_image from "../../utils/oss_image";
import AtPraiseBtn from '../../components/praise-btn'
import PicWechat from "../../assets/pic_wechat.png";
import './video.less'
import {formatStr} from "../../utils/format";




class VideoDetail extends Component {

  config = {
    navigationStyle: 'custom'
  }


  render() {
    return (
      <View className='video-root'>
        <Video
          className='video'
          src='http://file.vbao100.com/764bbbf37285486fedfb5db38164bef5.mp4'
          controls={false}
          autoplay={true}
          poster='http://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'
          initialTime='0'
          id='video'
          loop={false}
          muted={false}
        >
          <CoverView className='video-about'>
            <View className='name'>@123123</View>
            <View className='about'>123123123</View>
          </CoverView>

          <CoverView className='control-ext '>
            <View className='face-circle'>
              <Image className='face' src='http://b2-q.mafengwo.net/s12/M00/DB/96/wKgED1wgiq6AOny0AAfrDmRFrJM12.jpeg' />
            </View>

            <AtPraiseBtn />

            <View className='share-btn'>
              <Image className='icon' src={PicWechat} />
              <View className='num'>1337</View>
            </View>


          </CoverView>

        </Video>
      </View>
    );
  }
}

export default VideoDetail;
