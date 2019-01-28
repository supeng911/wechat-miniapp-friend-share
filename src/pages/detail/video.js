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
    navigationBarTextStyle: "white",
    navigationStyle: 'custom'
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'DetailModel/fetchVideo'
    })
  }

  handleBack = () => {
    console.log('back')
    Taro.navigateBack();
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
          <CoverView className='back-btn' onClick={this.handleBack}>  </CoverView>

          <CoverView className='video-about'>
            <View className='name'>@{videoData.author.nickName}</View>
            <View className='about'>{videoData.about}</View>
          </CoverView>

          <CoverView className='control-ext '>
            <CoverView className='face-circle'>
              <Image className='face' src='http://b2-q.mafengwo.net/s12/M00/DB/96/wKgED1wgiq6AOny0AAfrDmRFrJM12.jpeg' />
            </CoverView>

            <AtPraiseBtn />

            <CoverView className='share-btn'>
              <Image className='icon' src={PicWechat} />
              <CoverView className='num'>1337</CoverView>
            </CoverView>

          </CoverView>

        </Video>
      </View>
    );
  }
}

export default VideoDetail;
