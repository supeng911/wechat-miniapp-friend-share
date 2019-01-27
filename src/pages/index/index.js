import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View } from '@tarojs/components'
import AtNoteInfo from '../../components/note-info'
import AtTouchSlide from '../../components/touch-slide'

import './index.less'

@connect(state => {
  return {
    recommendList: state.IndexModel.list
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

  handleShowNote = (noteItem) => {
    const {type} = noteItem;
    if(type === 'Video') {
      Taro.navigateTo({
        url: '/pages/detail/video'
      })
    }
    console.log('show note', type)

  }

  render () {

    const {
      recommendList,
    } = this.props

    // let lastNoteInfo = {}
    // if(relationNotes.length > 0) {
    //   lastNoteInfo =  relationNotes[relationNotes.length - 1].reason;
    // }

    console.log(111, recommendList)

    return (
      <View className='index-container'>
        <View className='touch-container'>
          <AtTouchSlide
            data={recommendList}
            onRemoveItem={this.handleRemoveNote}
            onShowItem={this.handleShowNote}
          />

        </View>
        <View className='relation-container'>
          {/*
          <AtNoteInfo data={lastNoteInfo} />
          */}
        </View>
      </View>
    )
  }
}

export default Index
