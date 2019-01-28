import Taro, {Component} from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './index.less'

class ActionSheet extends Component {

  handleTouchMove = e => {
    e.stopPropagation()
    e.preventDefault()
  }

  close = () => {
    if(this.props.onCancel) {
      this.props.onCancel();
    }
  }

  render() {

    const {isOpened} = this.props


    const rootClasses = classNames({
      'action-sheet': true,
      'action-sheet--active': isOpened
    })

    return (
      <View className={rootClasses} onTouchMove={this.handleTouchMove}>
        <View onClick={this.close} className='action-sheet__overlay' />
        <View className='action-sheet__container'>
          <View className='action-sheet-body'>
            {this.props.children}
          </View>
          <View className='action-sheet-foot' onClick={this.close}>
            取消
          </View>
        </View>
      </View>
    );
  }
}

ActionSheet.propTypes = {
  children: PropTypes.node,
  isOpened: PropTypes.bool,
  cancelText: PropTypes.string,
  onCancel: PropTypes.func,
}

ActionSheet.defaultProps = {
  isOpened: false,
  cancelText: '取消',
}


export default ActionSheet;
