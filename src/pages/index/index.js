import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text, Button } from '@tarojs/components'
import AtNoteInfo from '../../components/note-info'
import AtTouchSlide from '../../components/touch-slide'
import AtActionSheet from '../../components/action-sheet'

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

  state = {
    openRelation: false
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

  //分享
  onShareAppMessage() {
    return {
      title: '朋友分享DEMMO',
      path: '/pages/index/index',
    }
  };

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

  handleOpenRelation = () => {
    this.setState({openRelation: true})
  }

  handleCloseRelation = () => {
    this.setState({openRelation: false})
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
          <AtNoteInfo data={lastRecommendInfo} onOpenRelation={this.handleOpenRelation} />
        </View>

        <AtActionSheet isOpened={this.state.openRelation} onCancel={this.handleCloseRelation}>
          <View className='re-share'>
            <View className='info'>您需要达到<Text className='lv'>12 Lv.</Text>才可以查看人脉地图！</View>
            <View>赶快分享提升等级吧！</View>
            <Button className='btn-share'>分享</Button>
          </View>
        </AtActionSheet>
      </View>
    )
  }
}

export default Index
