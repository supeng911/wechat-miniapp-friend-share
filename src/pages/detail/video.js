import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Video, CoverView, Image } from '@tarojs/components'
import oss_image from "../../utils/oss_image";
import AtPraiseBtn from '../../components/praise-btn'
import PicWechat from "../../assets/pic_wechat.png";
import './video.less'



@connect(state => {
  return {
    videoData: state.DetailModel
  }
})
class VideoDetail extends Component {

  config = {
    navigationStyle: 'custom'
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'DetailModel/fetchVideo'
    })
  }


  render() {

    const {videoData} = this.props

    return (
      <View className='video-root'>
        <Video
          className='video'
          src={videoData.path}
          poster={oss_image(videoData.cover)}
          controls={false}
          autoplay={true}
          initialTime='0'
          id='video'
          loop={false}
          muted={false}
        >
          <CoverView className='video-about'>
            <View className='name'>@{videoData.author.nickName}</View>
            <View className='about'>{videoData.about}</View>
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
