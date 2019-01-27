import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import AtRelationInfo from './RelationInfo'
import AtGroupInfo from './GroupInfo'

import './index.less'

class NoteInfo extends Component {

  render() {

    const {data} = this.props

    return (
      <View>
        {data.type === 'relation' ? (<AtRelationInfo data={data} />): null}
        {data.type === 'group' ? (<AtGroupInfo data={data} />): null}
      </View>
    )
  }
}

NoteInfo.propTypes = {
  data: PropTypes.object,
}

NoteInfo.defaultProps = {
  data: {}
}

export default NoteInfo;
