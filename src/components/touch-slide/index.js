import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import AtVideoInfo from './VideoInfo'
import './index.less'

class TouchSlide extends Component {

  state = {
    moveItemKey: -1,
    animate: true,
    touchStartX: 0,
    touchStartY: 0,
    moveX: 0,
    moveY: 0,
  }

  _initState = () => {
    this.setState({
      moveItemKey: -1,
      animate: true,
      touchStartX: 0,
      touchStartY: 0,
      moveX: 0,
      moveY: 0,
    })
  }

  handleTouchStart = (currentKey, event) => {
    const touchStartX = event.touches[0].pageX
    const touchStartY = event.touches[0].pageY

    this.setState({
      moveItemKey: currentKey,
      animate: false,
      touchStartX,
      touchStartY,
    })
  }

  handleTouchMove = (event) => {
    const touchMoveX = event.touches[0].pageX
    const touchMoveY = event.touches[0].pageY
    const moveX = touchMoveX - this.state.touchStartX;
    const moveY = touchMoveY - this.state.touchStartY;

    this.setState({
      moveX, moveY
    })

  }

  handleTouchEnd = () => {
    const {moveX, moveItemKey} = this.state

    if (abs(moveX) <= 100) {
      // 小于 50，恢复默认值
      this.setState({
        animate: true,
        moveX: 0,
        moveY: 0,
      })
      return ;
    }

    const newMoveX = moveX > 0 ? 950 : -950;
    this.setState({
      animate: true,
      moveX:newMoveX,
    })

    // 初始化数据
    setTimeout(() => {
      this._initState();
    }, 300)

    if( (moveX < 0) && this.props.onRemoveItem) {
      // 移除元素
      this.props.onRemoveItem(moveItemKey);
    }

    if( (moveX > 0) && this.props.onShowItem) {
      // 显示元素详情
      this.props.onShowItem(moveItemKey)
    }
  }

  handleClick = () => {
    if( this.props.onShowItem) {
      // 显示元素详情
      this.props.onShowItem()
    }
  }

  makeMoveStyle = (item, key) => {

    const {moveX, moveY, animate, moveItemKey} = this.state

    const moveStyle = {
      backgroundImage: `url(http://n3-q.mafengwo.net/s12/M00/73/D1/wKgED1w--7SAOcOhAAweIvLAFdg77.jpeg})`
    }

    if(key === moveItemKey) {
      moveStyle.transition = animate ?  "transform .5s" : 'none'
      moveStyle.transform = `translateX(${moveX}rpx)  translateY(${moveY}rpx) rotate(${moveX / 10}deg) `
    }

    return moveStyle;
  }

  render() {
    return (
      <View className='touch-slide-root'>
        <View className='touch-item back-item'>
          <AtVideoInfo src='http://n3-q.mafengwo.net/s12/M00/73/D1/wKgED1w--7SAOcOhAAweIvLAFdg77.jpeg'/>
        </View>

        <View
          className='touch-item front-item'
          style={this.makeMoveStyle({}, 2)}
          onTouchStart={this.handleTouchStart.bind(this, 2)}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
          onClick={this.handleClick}
        >
          <AtVideoInfo src='http://b3-q.mafengwo.net/s12/M00/5B/96/wKgED1xAwiKALJbkAA6vDNnM1EM77.jpeg'/>
        </View>
      </View>
    );
  }
}

export default TouchSlide
