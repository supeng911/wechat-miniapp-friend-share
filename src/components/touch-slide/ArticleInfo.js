import Taro, {Component} from '@tarojs/taro'
import {View, Image, Text} from '@tarojs/components'
import PropTypes from "prop-types";
import oss_image from '../../utils/oss_image'

import './index.less'
import AtAvatar from "../avatar";
import AtPraiseBtn from '../praise-btn'
import PicWechat from "../../assets/pic_wechat.png";
import IconFullGray from "../../assets/icon_full_gray.png";

class ArticleInfo extends Component{

  render() {
    const {data} = this.props


    return (
      <View className='article-info'>
        <View className='cover'>
          <Image className='bg' src={oss_image(data.cover, [600, 345])} />
          <View className='title'>
            {data.title}
          </View>
        </View>
        <View className='about'>
          {data.about}
          <Text className='more'> >>>更多 </Text>
        </View>

        <View className='control-ext'>
          <AtAvatar
            shape='slide-white-circle'
            src={oss_image(data.author.face, [42,42])}
          />

          <AtPraiseBtn isGray />

          <View className='share-btn'>
            <Image className='icon' src={PicWechat} />
            <View className='num gray-color'>1337</View>
          </View>

          <View className='full-btn '>
            <Image className='icon' src={IconFullGray} />
            <View className='num gray-color'>全屏</View>
          </View>
        </View>

      </View>
    );
  }
}

ArticleInfo.propTypes = {
  data: PropTypes.object,
}

ArticleInfo.defaultProps = {
  data: {}
}


export default ArticleInfo;
