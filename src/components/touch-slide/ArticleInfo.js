import Taro, {Component} from '@tarojs/taro'
import {View, Button, Text} from '@tarojs/components'
import AtAvatar from "../avatar"

import './index.less'


class ArticleInfo extends Component {

  render() {
    return (
      <View className='article-info'>
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

          <View>this</View>
          <View>this</View>
          <View>this</View>
          <View>this</View>

        </View>
      </View>
    );
  }
}

export default ArticleInfo
