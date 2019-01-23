import Taro, {Component} from '@tarojs/taro'
import {View, Image, Text} from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import IconPlayLike from '../../assets/icon_play_like.png'
import IconPlayLikeSelect from '../../assets/icon_play_like_select.png'

import './index.less'

class PraiseBtn extends Component{
  state = {
    showButtonGroup: false,
  }

  handlePraiseGroupShow = () => {
    this.setState({showButtonGroup: !this.state.showButtonGroup})
  }

  render() {

    const {showButtonGroup} = this.state

    return (
      <View className='praise-btn-root'>
        <Image className='icon' onClick={this.handlePraiseGroupShow} src={IconPlayLike} />
        <View className='num'>1207</View>
        <View className={classNames('pop-btn-group', {'show': showButtonGroup})}>
          <View>很棒</View>
          <View>好看</View>
          <View>好嗨哟</View>
        </View>
      </View>
    );
  }
}

export default PraiseBtn
