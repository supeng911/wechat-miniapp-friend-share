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
    console.log('type', type)
    if(type === 'Video') {
      Taro.navigateTo({
        url: '/pages/detail/video'
      })
    } else if (type === 'Article') {
      Taro.navigateTo({
        url: '/pages/detail/article'
      })
    }
  }

  render () {

    const {
      recommendList,
    } = this.props

    let lastRecommendInfo = {}
    if(recommendList.length > 0) {
      lastRecommendInfo =  recommendList[recommendList.length - 1].recommend;
    }

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
          <AtNoteInfo data={lastRecommendInfo} />
        </View>
      </View>
    )
  }
}

export default Index
