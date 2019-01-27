import Taro, { Component } from '@tarojs/taro'
import { View, Image, Button, Text } from '@tarojs/components'
import PropTypes from "prop-types";
import oss_image from '../../utils/oss_image'
import AtAvatar from "../avatar";
import IconRelationArrowGray from "../../assets/icon_relation_arrow_gray.png";
import './index.less'



class RelationInfo extends Component {
  render() {

    const { data } = this.props

    return (
      <View className='note-info-root'>
        <View className='relationship'>
          <AtAvatar
            shape='gradual-circle'
            src={oss_image(data.mainPerson.face, [128, 128])}
          />
          <View className='people-info'>
            <View className='top'><Text className='name'>{data.mainPerson.realName}</Text><Text className='praise'>认为{data.praiseText}</Text></View>
            <View className='bottom' >
              {data.dimension > 1 ? `TA是你的${data.dimension}°朋友` : '可能认识的人'}
            </View>
          </View>
          <Image className='arrow' src={IconRelationArrowGray} />
          {(data.dimension > 1) && (data.relations.length > 0) ? (
            <View className='face-group'>
              {data.relations.map(account => (
                <Image key={account.hashId} className='img' src={oss_image(account.face, [32, 32])} />
              ))}
            </View>
          ): null}
          {(data.dimension > 1) && (data.relations.length > 0) ? ( <Image className='arrow sec' src={IconRelationArrowGray} />) : null}
          <AtAvatar
            shape='gray-circle'
            src='http://b3-q.mafengwo.net/s11/M00/B0/93/wKgBEFrZWJGAMQhjAA0Nueb1ej047.jpeg'
          />
        </View>
        <Button className='control-btn'>人脉地图</Button>
      </View>
    );
  }
}


RelationInfo.propTypes = {
  data: PropTypes.object,
}

export default RelationInfo;
