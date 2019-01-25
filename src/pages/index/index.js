import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View } from '@tarojs/components'
import AtNoteInfo from '../../components/note-info'
import AtTouchSlide from '../../components/touch-slide'

import './index.less'

@connect(state => {
  return {
    relationNotes: state.IndexModel.data
  };
})
class Index extends Component {

  config = {
    "navigationBarBackgroundColor": "#100E1B",
    "navigationBarTextStyle": "white",
    "navigationBarTitleText": "朋友分享",
    "backgroundColor": "#100E1B",
    "backgroundTextStyle": "light"
  }

  componentWillMount() {
    this.props.dispatch({
      type: 'IndexModel/fetch'
    })
  }

  // componentWillReceiveProps (nextProps) {
  //   console.log(this.props, nextProps)
  // }

  // componentWillUnmount () { }

  // componentDidShow () { }

  // componentDidHide () { }

  handleRemoveNote = (noteItem) => {
    // console.log('remove', noteItem)
    this.props.dispatch({
      type: 'IndexModel/removeFirstItem',
    })
  }

  handleShowNote = () => {
    console.log('show note')
  }

  render () {

    const {
      relationNotes,
    } = this.props

    return (
      <View className='index-container'>
        <View className='touch-container'>
          <AtTouchSlide
            data={relationNotes}
            onRemoveItem={this.handleRemoveNote}
            onShowItem={this.handleShowNote}
          />
        </View>
        <View className='relation-container'>
          <AtNoteInfo />
        </View>
      </View>
    )
  }
}

export default Index
