import Taro, {Component} from '@tarojs/taro'
import {View, Button, Text} from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {abs} from '../../utils/helps'
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

    if (abs(moveX) <= 200) {
      // 小于 50，恢复默认值
      this.setState({
        animate: true,
        moveX: 0,
        moveY: 0,
      })
      return;
    }

    const newMoveX = moveX > 0 ? 950 : -950;
    this.setState({
      animate: true,
      moveX: newMoveX,
    })

    // 初始化数据
    setTimeout(() => {
      this._initState();
    }, 300)

    if ((moveX < 0) && this.props.onRemoveItem) {
      // 移除元素
      this.props.onRemoveItem(this.props.data[moveItemKey]);
    }

    if ((moveX > 0) && this.props.onShowItem) {
      // 显示元素详情
      this.props.onShowItem(moveItemKey)
    }
  }

  handleClick = () => {
    if (this.props.onShowItem) {
      // 显示元素详情
      this.props.onShowItem()
    }
  }


  render() {

    const {data} = this.props;
    console.log('touch', data)

    return (
      <View className='touch-slide-root'>

        {/*
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

         */}

        {data.map((noteItem, key) => {
          let touchStyle = {};
          const {moveX, moveY, animate, moveItemKey} = this.state
          if(key === moveItemKey) {
            touchStyle = {
              transition: animate ? "transform .5s" : 'none',
              transform: `translateX(${moveX}rpx)  translateY(${moveY}rpx) rotate(${-moveX / 20}deg) `
            }
          }
          return (
            <View
              className={classNames({
                'touch-item': true,
                'back-item': key < (data.length - 1),
                'front-item': key = (data.length - 1)
              })}
              style={touchStyle}
              onTouchStart={this.handleTouchStart.bind(this, key)}
              onTouchMove={this.handleTouchMove}
              onTouchEnd={this.handleTouchEnd}
              onClick={this.handleClick}
              key={key}
            >
              {noteItem.type === 'Video'? (<View>{key} -- this is video--{noteItem.hashId} -- {noteItem.type}</View>):null}
              {noteItem.type === 'Article'? (<View>{key} --this is Article--{noteItem.hashId} -- {noteItem.type}</View>):null}
              {noteItem.type === 'Ask'? (<View>{key} --this is ask--{noteItem.hashId} -- {noteItem.type}</View>):null}
            </View>
          );
        })}
      </View>
    );
  }
}

TouchSlide.propTypes = {
  data: PropTypes.array,
  onRemoveItem: PropTypes.func,
  onShowItem: PropTypes.func,
}

TouchSlide.defaultProps = {
  data: []
}

export default TouchSlide
