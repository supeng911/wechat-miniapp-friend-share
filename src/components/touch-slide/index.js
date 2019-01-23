import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import AtArticleInfo from './ArticleInfo'
import './index.less'

class TouchSlide extends Component {
  render() {
    return (
      <View className='touch-slide-root'>
        <View className='touch-item back-item'>
          <AtArticleInfo />
        </View>

        <View className='touch-item front-item'>
          <AtArticleInfo />
        </View>
      </View>
    );
  }
}

export default TouchSlide
