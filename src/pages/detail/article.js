import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Video, CoverView, Image } from '@tarojs/components'
import oss_image from "../../utils/oss_image";
import AtPraiseBtn from '../../components/praise-btn'
import PicWechat from "../../assets/pic_wechat.png";
import './article.less'

@connect(state => {
  return {
    articleData: state.DetailModel
  }
})
class Article extends Component{
  config = {
    "navigationBarBackgroundColor": "#100E1B",
    "navigationBarTextStyle": "white",
    "navigationBarTitleText": " ",
    "backgroundColor": "#100E1B",
    "backgroundTextStyle": "light"
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'DetailModel/fetchArticle'
    })
  }


  render() {
    console.log('article', this.props)

    const {articleData} = this.props

    return (
      <View className='article-root'>
        <View className='title'>{articleData.title}</View>

        <View className='detail-content'>
          <View className='paragraph'>
            说起故宫对于我们来说都不陌生，只要来京旅游的人一定会来这里！说起来我已经10年没到过故宫了，
            上一次来是2009年3月28日。
          </View>
          <View className='paragraph'>
            最近在公众号上面看到故宫正在举办一个大展，所以想着趁年前人不是太多先睹为快，只可惜还是失
            算了，故宫虽大 但展厅里的人真的是太多了！拿个单反跟本无法靠近，拍出来的照片有一部分都拍
            糊了，后来改用手机拍照。好了，不吐槽了，接下来会分几篇游记来介绍本次故宫之行的一些所见所
            闻。下面就介绍一下这次的展览！
          </View>
          <View className='paragraph'>
            春节是中华民族最隆重的传统节日。为了迎接即将到来的己亥年春节，让传统的节庆文化鲜活起来，
            为观众带来节日的文化享受，故宫博物院于2019年1月6日起在午门-雁翅楼展厅举办“贺岁迎祥——
            紫禁城里过大年”展览
          </View>
          <View className='paragraph'>
            故宫博物院院长单霁翔表示，春节作为中华民族最隆重的传统节日，寄托着人民群众“回家过年”的美
            好期盼。近年来，越来越多的人会在春节假期规划中给“博物馆”留有一席之地，“博物馆里过大年”
            已从一个响亮的口号，成为博物馆界的一种常态。为了让观众在浓浓的文化氛围中感受别样年味，故宫
            博物院特举办己亥春节大展“贺岁迎祥——紫禁城里过大年”，以破纪录的近千件文物展示数量，恢复
            多种昔日皇宫过年的装饰、活动的展览创新形式，为观众呈现一个充满年味的紫禁城。
          </View>
          <View className='paragraph'>
            从腊月初一展至三月初三
          </View>
          <View className='paragraph'>
            展览为期三个月，于2019年1月6日开幕，正值阴历戊戌年腊月初一，也是传统上一系列庆贺新年活动开始的
            日子。闭幕日期选在2019年4月7日，阴历己亥年三月初三，即游春踏青的“上巳节”。
          </View>
          <View className='paragraph'>
            此次展览分为文物展览和实景体验两部分。文物展览位于午门正殿和东西雁翅楼展厅，共展出文物885件（套）。
            展品主要精选自故宫博物院珍藏，并得到 中国 国家第一历史档案馆、 沈阳 故宫博物院、首都博物馆、天坛
            公园管理处等单位的大力支持。实景体验部分包括整个紫禁城开放区域，都成为春节文化的展场，在宫殿门口
            会悬挂着寓意吉祥的春联、门神，在廊庑下装饰着华美的宫灯，在乾清宫和皇极殿的丹陛上下树立着高大的天
            灯、万寿灯，总共使用仿制品超过1000件。
          </View>
          <View className='paragraph'>
            不论古代抑或今天，不论宫廷还是民间，辞旧迎 新都 是 中国 人过年永恒的主题。基于文献和实物的留存情况，
            故宫博物院虽然选择了清朝作为宫廷春节文化的展览时段，但其内容仍是汉文化大框架下的历代相继的礼俗。
          </View>
          <View className='paragraph'>
            六大主题展示清宫年俗
          </View>

          <View className='image'>
            <Image src="http://b1-q.mafengwo.net/s12/M00/C5/85/wKgED1xLGyaAZfJEAAyttbvlVXc14.jpeg" />
          </View>

          <View className='image'>
            <Image src="http://p2-q.mafengwo.net/s12/M00/C5/87/wKgED1xLGyiAZpCFAAg7CwQFkww26.jpeg" />
          </View>

          <View className='image'>
            <Image src="http://n3-q.mafengwo.net/s11/M00/E2/01/wKgBEFxLGymAU2erAAhb84XVVZY35.jpeg" />
          </View>
          <View className='paragraph'>
            为了让观众在参观“紫禁城里过大年”展览的同时，享受优质服务，留下美好回忆，春节期间还将有以展示
            全国各地老字号产品为主题的“中华老字号 故宫过大年”展，在故宫博物院慈宁宫花园、慈宁门外广场举办。
            此次活动由商务部、文化和旅游部、 山东 省政府支持，故宫博物院、 山东 省商务厅主办，展期为2019年1月28日
            （农历小年）至2019年2月12日（农历正月初八）。届时，来自 北京 、 天津 、 上海 、 山东 、 江苏 、 浙江 、
            河南 、 安徽 、 吉林 、 山西 共10个省（市）的145家中华老字号企业参展，展示传统小吃、特色美食、保健食品、
            丝织服饰、生活用品、文房用品、首饰玉器、文化创意类工艺品、非物质文化遗产工艺品等10余内容，相信会给观众
            带来更加丰富的观展体验。
          </View>
          <View className='image'>
            <Image src="http://n1-q.mafengwo.net/s12/M00/C5/90/wKgED1xLGzGAcPsCAAcLuWBnNmE72.jpeg" />
          </View>

        </View>

      </View>
    );
  }
}

export default Article;
