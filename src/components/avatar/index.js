import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './index.less'

class Avatar extends Component{

  render() {

    const {
      shape,
      src,
      className: classNameProp,
    } = this.props

    return (
      <View className={classNames('avatar-root', shape, {[classNameProp]: Boolean(classNameProp)})}>
        <Image className='face' src={src} />
      </View>
    );
  }
}

Avatar.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  shape: PropTypes.oneOf(['gradual-circle', 'gray-circle', 'slide-white-circle']),
}

Avatar.defaultProps = {
  shape: 'gradual-circle',
}

export default Avatar;
