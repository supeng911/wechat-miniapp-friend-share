import Taro, {Component} from '@tarojs/taro'
import {View, Image, Text} from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import IconPlayLike from '../../assets/icon_play_like.png'
import IconPlayLikeGray from '../../assets/icon_play_like_gray.png'
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
    const {isGray} = this.props

    return (
      <View className='praise-btn-root'>
        <Image className='icon' onClick={this.handlePraiseGroupShow} src={isGray? IconPlayLikeGray : IconPlayLike} />
        <View className={classNames('num', {'gray': isGray})}>1207</View>
        <View className={classNames('pop-btn-group', {'show': showButtonGroup})}>
          <View>很棒</View>
          <View>好看</View>
          <View>好嗨哟</View>
        </View>
      </View>
    );
  }
}

PraiseBtn.propTypes = {
  isGray: PropTypes.bool,
}

PraiseBtn.defaultProps = {
  isGray: false
}


export default PraiseBtn
